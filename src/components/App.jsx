import { Component } from "react"
import FeedbackOptions from './Feedback/FeedbackOptions'
import Statistics from "./Statistics/Statistics"
import Section from './Section/Section'
import Notification from './Notification/Notification'
class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  handleFeedback=(option)=>{
    this.setState((prevState)=>({[option]: prevState[option]+1}))
   
  }
  countTotalFeedback=()=> {
    const { good, neutral, bad } = this.state
    return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state
    const positiveFeedbackPercentage = Math.round((good / (good + neutral + bad)) * 100)
    return positiveFeedbackPercentage
  }

  render() {
    const {good, neutral, bad}=this.state
    return (
      <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
        </Section>
        
        <Section title='Statistics'>
          {this.countTotalFeedback() ?
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} /> :
            <Notification message="
          There is no feedback!"/>}
      </Section>
      </>
      
    )
  }
};

export default App