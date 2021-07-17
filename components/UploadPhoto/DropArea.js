import { FileDrop } from "react-file-drop";

import classes from "./DropArea.module.css";

const DropArea = (props) => {
  const onDropHandler = (files, event) => {
    props.onDrop(files, event);
  };

  return (
    <FileDrop
      className={classes.droparea_container}
      onFrameDragEnter={(event) => {}}
      onFrameDragLeave={(event) => {}}
      onFrameDrop={(event) => {}}
      onDragOver={(event) => {}}
      onDragLeave={(event) => {}}
      onDrop={onDropHandler}
    >
      <span className={classes.droparea_text}>Drop photo here!</span>
    </FileDrop>
  );
};

export default DropArea;
