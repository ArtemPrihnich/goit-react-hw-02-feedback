import PropTypes from 'prop-types'
import { Box, Title } from './FeedbackSection.styled'

export default function Section({ title, children }) {
    return <Box>
        <Title>{title}</Title>
        {children}
    </Box>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}