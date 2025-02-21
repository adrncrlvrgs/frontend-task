import React from "react";
import { downloadJSON, downloadCSV, printToConsole } from "utils/downloadUtils";
import styles from "styles/styles.module.scss";
const Buttons = ({ facts }) => {
  return (
    <div className={styles["buttons"]}>
      <button onClick={() => downloadJSON(facts)}>Download JSON</button>
      <button onClick={() => downloadCSV(facts)}>Download CSV</button>
      <button onClick={() => printToConsole(facts)}>Print to Console</button>
    </div>
  );
};

export default Buttons;
