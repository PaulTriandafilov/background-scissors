import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  const closeModal = () => {
    props.onCloseModal();
  };

  return props.show ? (
    <div className={classes.backdrop} onClick={closeModal}></div>
  ) : null;
};

export default Backdrop;
