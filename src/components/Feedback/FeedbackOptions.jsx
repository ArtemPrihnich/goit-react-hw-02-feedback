import PropTypes from 'prop-types'
export default function FeedbackOptions({ onLeaveFeedback }) {
    return <>
        <ul>
            <li><button onClick={() => onLeaveFeedback('good')}>Good:</button></li>
            <li><button onClick={() => onLeaveFeedback('neutral')}>Neutral:</button></li>
            <li><button onClick={() => onLeaveFeedback('bad')}>Bad:</button></li>
        </ul>
    </>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}