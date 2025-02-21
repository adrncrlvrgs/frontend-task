import React from "react";
import styles from "styles/styles.module.scss";

const FactTable = (props) => {
  const { facts } = props || {};
  return (
    <table className={styles["fact-table"]}>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Fact</th>
          <th>Source</th>
          <th>Source URL</th>
          <th>Language</th>
          <th>Permalink</th>
        </tr>
      </thead>
      <tbody>
        {facts.map((fact, index) => {
          const { id, text, source, source_url, language, permalink } =
            fact || {};
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{id}</td>
              <td>{text}</td>
              <td>{source}</td>
              <td>
                <a href={source_url} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
              <td>{language}</td>
              <td>
                <a href={permalink} target="_blank" rel="noopener noreferrer">
                  Permalink
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FactTable;
