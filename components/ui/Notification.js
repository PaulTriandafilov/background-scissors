import { useState } from "react";
import classes from "./Notification.module.css";

const Notification = (props) => {
  const [classNames, setClassNames] = useState(
    classes.notification_container + " " + classes.animation_in
  );

  setTimeout(() => {
    setClassNames(classes.notification_container);
    props.resetErrors();
  }, 7000);

  return <div className={classNames}>{props.message}</div>;
};

export default Notification;
