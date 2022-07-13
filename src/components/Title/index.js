import React from 'react';
import './styles.css';

function Title({label = 'No Label'}) {
  return (
    <h1 className="title">
      {label}
    </h1>
  );
}

export default Title;
