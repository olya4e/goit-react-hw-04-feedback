import PropTypes from 'prop-types'
import css from './Notification.module.css'
const Notification = ({message}) => {
    
    return (
        <div className={css.notificaton}>{message}</div>
    )
}
Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
export default Notification