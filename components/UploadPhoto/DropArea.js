import { useRef } from "react";
import { FileDrop } from "react-file-drop";

import classes from "./DropArea.module.css";

const DropArea = (props) => {
  const fileInputRef = useRef();

  const onDropHandler = (files, event) => {
    props.onAttachFile(files, event);
  };

  const onFileInputChange = (event) => {
    const { files } = event.target;

    props.onAttachFile(files, event);
  };

  const onTargetClickHandler = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <FileDrop
        className={classes.droparea_container}
        onFrameDragEnter={(event) => {}}
        onFrameDragLeave={(event) => {}}
        onFrameDrop={(event) => {}}
        onDragOver={(event) => {}}
        onDragLeave={(event) => {}}
        onDrop={onDropHandler}
        onTargetClick={onTargetClickHandler}
      >
        <span className={classes.droparea_text}>Drop a photo here!</span>
      </FileDrop>
      <input
        onChange={onFileInputChange}
        ref={fileInputRef}
        type="file"
        className={classes.droparea_input}
      />
    </>
  );
};

export default DropArea;
