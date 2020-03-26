import React from 'react';

import './error-indicator.scss';
import icon from './error.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="Error">Error!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (We have already sent fixes to fix the problem)
      </span>
    </div>
  );
};

export default ErrorIndicator;