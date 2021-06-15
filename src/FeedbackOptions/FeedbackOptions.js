import shortid from "shortid";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map((option) => {
        const id = shortid.generate();
        return (
          <button
            key={id}
            type="button"
            onClick={onLeaveFeedback}
            name={option}
            className={styles.feedbackButton}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
