import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral}</li>
        <li className={styles.item}>Bad: {bad}</li>
      </ul>
      <ul className={`${styles.list} ${styles.list__stats}`}>
        <li className={styles.item__total}>Total: {total}</li>
        <li className={styles.item__percent}>
          Positive feedback: {positivePercentage}
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
