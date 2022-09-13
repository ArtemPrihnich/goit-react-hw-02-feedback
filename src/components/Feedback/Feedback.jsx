import React, { Component } from "react";
import Section from "./FeedbackSection";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./FeedbackStatistics";
import Notification from "./FeedbackNotification";

export default class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onLeaveFeedback = (propertyName) => {
        this.setState(prevState => {
            return { [propertyName]: prevState[propertyName] + 1 }
        })
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0
        }
        const { good } = this.state
        return Number((good / total) * 100).toFixed(0)
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        return <>
            <Section title='Please leave feedback'>
                <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
            </Section>
            <Section title='Statistics'>
                {!total ? <Notification message="There is no feedback" /> : <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />}
            </Section>
        </>
    };
}