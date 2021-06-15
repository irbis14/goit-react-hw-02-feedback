import { Component } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
    console.log("onLeaveFeedback");
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.floor(
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.bad)) *
          100
      ) + "%"
    );
  };

  render() {
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions options={this.state} />
        </Section>
        <Section title={"Statistics"}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default App;
