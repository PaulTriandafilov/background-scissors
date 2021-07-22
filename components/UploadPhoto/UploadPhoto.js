import { useState } from "react";

import DropModal from "./DropModal";
import classes from "./UploadPhoto.module.css";
import Modal from "../ui/Modal";

const UploadPhoto = (props) => {
  const [showModal, setShowModal] = useState(false);

  const onUploadHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal onCloseModal={closeModalHandler}>
          <DropModal />
          <p className={classes.supported_text}>
            Max file size: 10Mb. Types: jpg, jpeg, png, gif
          </p>
        </Modal>
      )}
      <div className={classes.instruction}>
        <ul>
          <li>
            <i className="ion-ios-checkmark-outline icon-small" />
            <span>Upload an image</span>
          </li>
          <li>
            <i className="ion-ios-checkmark-outline icon-small" />
            <span>Wait for AI remove background</span>
          </li>
          <li>
            <i className="ion-ios-checkmark-outline icon-small" />
            <span>Download your image without background.</span>
          </li>
          <li>
            <i className="ion-ios-checkmark-outline icon-small" />
            <span>Repeat.</span>
          </li>
        </ul>
      </div>
      <div className={classes.main_action}>
        <button onClick={onUploadHandler}>Upload</button>
      </div>
    </>
  );
};

export default UploadPhoto;
