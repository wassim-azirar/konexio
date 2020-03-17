import PropTypes from 'prop-types';
import React from 'react';
import './Promo.scss';

const Promo = props => {
  const { name, startDate, endDate } = props;
  return (
    <div>
      <div className='bloc'>{`Nom de la promo: ${name}`}</div>
      <div className='bloc'>{`Date de début de la formation: ${startDate}`}</div>
      <div className='bloc'>{`Date de fin de la formation: ${endDate}`}</div>
    </div>
  );
};

Promo.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
};

export default Promo;
