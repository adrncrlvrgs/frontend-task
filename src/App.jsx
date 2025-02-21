import React from "react";
import useFetchFacts from "./useFetchFacts";
import FactTable from "components/FactTable";
import Buttons from "components/Button";
import styles from 'styles/styles.module.scss';


const App = () => {
  const { facts, loading, error } = useFetchFacts(15);

  return (
    <div className={styles["app"]}>
      <h1>Random Facts</h1>

      {loading && <p>Loading...</p>}
      {error && <p className={styles["error"]}>{error}</p>}
      {!loading && !error && (
        <>
          <FactTable facts={facts} />
          <Buttons facts={facts} />
        </>
      )}
    </div>
  );
};

export default App;
