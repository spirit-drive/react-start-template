import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const OperationSummary = ({ amount, category, title, description }) => {
  return (
    <div className="operation-summary">
      <div className="operation-summary__amount">Сумма: {amount} руб.</div>
      <div className="operation-summary__category">Категория: {category}</div>
      <div className="operation-summary__title">Название: {title}</div>
      <div className="operation-summary__description">Описание: {description}</div>
    </div>
  );
};

OperationSummary.propTypes = {
  amount: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default OperationSummary;
