import PropTypes from 'prop-types'
import { Item, List, Button } from './FeedbcakOptions.styled'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>
            <List>
                {options.map(option => (
                    <Item key={option}><Button onClick={() => onLeaveFeedback(`${option}`)}>{option}</Button></Item>
                ))}
            </List>
        </>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}
