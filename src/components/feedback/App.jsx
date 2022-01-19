import React, {Component} from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notfication";
//==============================================

import AppWrapper from "./AppStyle";

class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state
        const result = good + neutral + bad;
        return result
    }

    countPositiveFeedbackPercentage = () => {
        const {good} = this.state
        const percentage = (good * 100) / this.countTotalFeedback();
        return Math.round(percentage)
    }

    onLeaveFeedback = (e) => {
        const name = e.target.name;

        this.setState((prevState) => ({

            [name]: prevState[name] + 1

        }));

    };

    render(){
        const {good, neutral, bad} = this.state
        const total = this.countTotalFeedback()
        const percentage = this.countPositiveFeedbackPercentage()
        const obj = Object.keys(this.state)
        return <AppWrapper>
            <Section title='Please leave feedback'>
                <FeedbackOptions
                    options={obj}
                    onLeaveFeedback={this.onLeaveFeedback}
                />
            </Section>


            <Section title='Statistics'>
                {total > 0 ? <Statistics good={good}
                                         bad={bad}
                                         neutral={neutral}
                                         total={total}
                                         percentage={percentage}
                /> : <Notification message='There is no feedback'/>}
            </Section>


        </AppWrapper>
    }
}

export default App