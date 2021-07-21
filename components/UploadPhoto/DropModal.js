import { useState } from "react";
import DropArea from "./DropArea";
import Image from "./Image";
import Notification from "../ui/Notification";

const SUPPORTED_TYPES = ["image/jpeg", "image/png"];
const MAX_FILE_SIZE = 10000000;

const DropModal = (props) => {
  const [isProcessing, setIsProcessing] = useState(null);
  const [isProcessed, setIsProcessed] = useState(null);
  const [hasErrors, setHasErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something went wrong");
  const [src, setSrc] = useState(null);

  async function requestApi(file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/rm-bg", {
      method: "POST",
      body: formData,
    });

    const data = await response.blob();
    return URL.createObjectURL(data);
  }

  const updateSrcFromFile = (file) => {
    const reader = new FileReader();
    reader.onload = (function () {
      return function (e) {
        setSrc(e.target.result);
      };
    })();
    reader.readAsDataURL(file);
  };

  const resetErrors = () => {
    setHasErrors(false);
  };

  async function onAttachFileHandler(files, event) {
    if (files.length > 1) {
      setHasErrors(true);
      setErrorMessage("Please upload only 1 file");
      return;
    }
    const file = files[0];

    if (file.size > MAX_FILE_SIZE) {
      setHasErrors(true);
      setErrorMessage("Too large file. Max size 10mb");
      return;
    }

    if (!SUPPORTED_TYPES.includes(file.type)) {
      setHasErrors(true);
      setErrorMessage("Unsupported file type");
      return;
    }
    setIsProcessing(true);

    updateSrcFromFile(file);

    const srcWithoutBG = await requestApi(file);
    setSrc(srcWithoutBG);
    setIsProcessing(false);
    setIsProcessed(true);
  }

  const onResetHandler = () => {
    setIsProcessed(false);
    setSrc(null);
  };

  return (
    <>
      {src && (
        <Image
          onReset={onResetHandler}
          isProcessing={isProcessing}
          isProcessed={isProcessed}
          src={src}
        />
      )}
      {!src && <DropArea onAttachFile={onAttachFileHandler} />}
      {hasErrors && (
        <Notification
          show={hasErrors}
          resetErrors={resetErrors}
          message={errorMessage}
        />
      )}
    </>
  );
};

export default DropModal;
