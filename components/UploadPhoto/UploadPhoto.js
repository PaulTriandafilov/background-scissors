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
        </Modal>
      )}
      <div className={classes.instruction}>
        <ul>
          <li>
            <i className="ion-ios-checkmark-outline icon-small" />
            Upload an image
          </li>
          <li>
            <i className="ion-ios-checkmark-outline icon-small" />
            Click procceed
          </li>
          <li>
            <i className="ion-ios-checkmark-outline icon-small" />
            Wait for process to be done
          </li>
          <li>
            <i className="ion-ios-checkmark-outline icon-small" />
            Confirm result
          </li>
          <li>
            <i className="ion-ios-checkmark-outline icon-small" />
            Download the image without background
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
