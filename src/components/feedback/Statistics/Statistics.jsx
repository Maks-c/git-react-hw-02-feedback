import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({good, bad, neutral, total, percentage}) => {
    return (
        <div>
            <span>Good:{good}</span>
            <span>Neutral:{neutral}</span>
            <span>Bad:{bad}</span>
            <span>Total:{total}</span>
            <span>Positive feedback:{percentage}%</span>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Statistics; 