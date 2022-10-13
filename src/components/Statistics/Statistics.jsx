import PropTypes from 'prop-types'
import css from './Statistics.module.css'
const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <ul className={css.list}>
            <li className={css.item}>Good: <span className={css.value}>{good}</span></li>
            <li className={css.item}>Neutral: <span className={css.value}>{neutral}</span></li>
            <li className={css.item}>Bad: <span className={css.value}>{bad}</span></li>
            <li className={css.item}>Total: <span className={css.value}>{total}</span></li>
            <li className={css.item}>PositivePercentage: <span className={css.value}>{positivePercentage}%</span></li>
        </ul>
    )
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,  
}
export default Statistics