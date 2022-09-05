import React from "react";

import styles from "./InputControl.module.css";

function InputControl(props) {
  return (
    <div className={styles.containerLabel}>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;
