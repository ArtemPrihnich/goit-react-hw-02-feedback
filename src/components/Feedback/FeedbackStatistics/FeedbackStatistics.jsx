import PropTypes from 'prop-types'
import { Item, List, Text } from './FeedbackStatistics.styled'

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
            <List>
                <Item>Good<Text>{good}</Text></Item>
                <Item>Neutral<Text>{neutral}</Text></Item>
                <Item>Bad<Text>{bad}</Text></Item>
                <Item>Total<Text>{total()}</Text></Item>
                <Item>Positive feedback<Text>{positivePercentage()}%</Text></Item>
            </List>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}