import PropTypes from 'prop-types';
import React from 'react';

const Promo = props => {
  const { name, startDate, endDate } = props;
  return (
    <header>
      <div>{`Name: ${name}`}</div>
      <div>{`Start date: ${startDate}`}</div>
      <div>{`End date: ${endDate}`}</div>
    </header>
  );
};

Promo.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
};

export default Promo;
