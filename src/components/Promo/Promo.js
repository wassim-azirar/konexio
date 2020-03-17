import PropTypes from 'prop-types';
import React from 'react';
import './Promo.scss';

const Promo = props => {
  const { name, startDate, endDate } = props;
  return (
    <div className='container'>
      <div className='bloc'>
        <div className='title'>Promotion name</div>
        <div>{name}</div>
      </div>

      <div className='bloc'>
        <div className='title'>Start date</div>
        <div>{startDate}</div>
      </div>

      <div className='bloc'>
        <div className='title'>End date</div>
        <div>{endDate}</div>
      </div>
    </div>
  );
};

Promo.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
};

export default Promo;
