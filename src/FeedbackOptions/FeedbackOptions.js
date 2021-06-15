import PropTypes from "prop-types";
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

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
};

export default FeedbackOptions;
