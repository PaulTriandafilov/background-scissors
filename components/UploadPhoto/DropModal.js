import { useState } from "react";
import DropArea from "./DropArea";
import Image from "./Image";

const DropModal = (props) => {
  const [isProcessing, setIsProcessing] = useState(null);
  const [src, setSrc] = useState(null);

  async function onDropHandler(files, event) {
    setIsProcessing(true);
    const file = files[0];

    const reader = new FileReader();
    reader.onload = (function () {
      return function (e) {
        setSrc(e.target.result);
      };
    })();
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/rm-bg", {
      method: "POST",
      body: formData,
    });

    const data = await response.blob();
    setSrc(URL.createObjectURL(data));
    setIsProcessing(false);
  }

  return (
    <>
      {src && <Image isProcessing={isProcessing} src={src} />}
      {!src && <DropArea onDrop={onDropHandler} />}
    </>
  );
};

export default DropModal;
