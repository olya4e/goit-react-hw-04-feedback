import PropTypes from 'prop-types'
import css from './FeedbackOptions.module.css'
const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
         <div className={css.feedback__container}>
            {options.map(option => 
                <button onClick={()=>onLeaveFeedback(option)} className={css.feedbackbtn} key={option}>{option}</button>)}
        </div>
    )
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions