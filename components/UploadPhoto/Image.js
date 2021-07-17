import classes from "./Image.module.css";
import ImageBackDrop from "./ImageBackdrop";

const Image = (props) => {
  const isProcessing = props.isProcessing;

  return (
    <>
      {isProcessing && <ImageBackDrop />}
      <img className={classes.image} src={props.src} alt="Uploaded photo" />
    </>
  );
};

export default Image;
