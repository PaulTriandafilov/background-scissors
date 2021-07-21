import { useState } from "react";
import DropArea from "./DropArea";
import Image from "./Image";
import Notification from "../ui/Notification";

const DropModal = (props) => {
  const [isProcessing, setIsProcessing] = useState(null);
  const [isProcessed, setIsProcessed] = useState(null);
  const [hasErrors, setHasErrors] = useState(false);
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
      return;
    }

    setIsProcessing(true);
    const file = files[0];

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
          message="Please upload only 1 file"
        />
      )}
    </>
  );
};

export default DropModal;
