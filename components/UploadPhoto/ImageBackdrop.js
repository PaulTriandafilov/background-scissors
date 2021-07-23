import classes from "./ImageBackdrop.module.css";

const ImageBackDrop = () => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.backdrop_loader}></div>
    </div>
  );
};

export default ImageBackDrop;
