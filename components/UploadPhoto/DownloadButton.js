import classes from "./DownloadButton.module.css";

const DownloadButton = (props) => {
  const src = props.src;
  const onResethandler = props.onReset;

  const onResetClickedHandler = () => {
    onResethandler();
  };

  return (
    <div className={classes.download_button_container}>
      <a download="custom-filename.jpg" href={src} title="Download">
        Download
      </a>
      <a onClick={onResetClickedHandler} href="#">
        Upload one more
      </a>
    </div>
  );
};

export default DownloadButton;
