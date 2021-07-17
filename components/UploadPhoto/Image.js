import classes from "./Image.module.css";

const Image = (props) => {
  return <img className={classes.image} src={props.src} alt="Uploaded photo" />;
};

export default Image;
