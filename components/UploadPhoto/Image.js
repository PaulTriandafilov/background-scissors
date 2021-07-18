import classes from "./Image.module.css";
import ImageBackDrop from "./ImageBackdrop";
import DownloadButton from "./DownloadButton";

const Image = (props) => {
  const isProcessing = props.isProcessing;
  const isProcessed = props.isProcessed;
  const onResetHandler = props.onReset;

  return (
    <>
      {isProcessing && <ImageBackDrop />}
      <img className={classes.image} src={props.src} alt="Uploaded photo" />
      {isProcessed && (
        <DownloadButton onReset={onResetHandler} src={props.src} />
      )}
    </>
  );
};

export default Image;
