import { useState} from "react"
import FeedbackOptions from './Feedback/FeedbackOptions'
import Statistics from "./Statistics/Statistics"
import Section from './Section/Section'
import Notification from './Notification/Notification'

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback=(option)=>{
    switch (option) {
      case 'good':
        setGood(good => good + 1)
         break
      case 'neutral':
        setNeutral(neutral => neutral + 1)
        break
      case 'bad':
        setBad(bad=> bad + 1)
        break
      default:
        throw new Error('Not supported type');
    }     
  }

  const countTotalFeedback=()=> {
    return good + neutral + bad;
  }
  
  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round((good / (good + neutral + bad)) * 100)
    return positiveFeedbackPercentage
  }

  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
        </Section>
        <Section title='Statistics'>
          {countTotalFeedback() ?
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} /> :
            <Notification message="
          There is no feedback!"/>}
      </Section>
      </> 
  )
}
