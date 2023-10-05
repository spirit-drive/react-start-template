import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const OperationView = ({ amount, category, title, description, date }) => {
  console.log(`Сумма: ${amount} руб`);

  return (
    <div className="opeation-view">
      <div className="opeation-view__header">
        <h2>{title}</h2>
        <button>Редактировать</button>
      </div>
      <div className="opeation-view__details">
        <div className="opeation-view__amount">
          <b>Сумма:</b> {amount} руб.
        </div>
        <div className="opeation-view__category">
          <b>Категория:</b> {category}
        </div>
        <div className="opeation-view__description">
          <b>Описание:</b> {description}
        </div>
        <div className="opeation-view__date">
          <b>Дата:</b> {date}
        </div>
      </div>
    </div>
  );
};

OperationView.propTypes = {
  amount: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
};

export default OperationView;
