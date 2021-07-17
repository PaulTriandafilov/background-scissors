import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  return (
    <>
      <Backdrop show={true} onCloseModal={props.onCloseModal} />
      <div className={classes.modal}>{props.children}</div>
    </>
  );
};

export default Modal;
