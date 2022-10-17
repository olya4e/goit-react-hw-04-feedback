import { useState, useEffect} from "react"
import FeedbackOptions from './Feedback/FeedbackOptions'
import Statistics from "./Statistics/Statistics"
import Section from './Section/Section'
import Notification from './Notification/Notification'

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [percent, setPercent] = useState(0)

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

  useEffect(() => {
    setTotal(good + neutral + bad)
    setPercent(Math.round((good / (good + neutral + bad)) * 100))
  }, [bad, good, neutral, total])

  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
        </Section>
        <Section title='Statistics'>
          {total ?
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent} /> :
            <Notification message="
          There is no feedback!"/>}
      </Section>
      </> 
  )
}
