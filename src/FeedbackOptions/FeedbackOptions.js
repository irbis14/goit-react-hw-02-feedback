import shortid from "shortid";

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
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
