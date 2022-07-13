import React from 'react';
import './styles.css';

function Box({
  children,
}) {
  return (
    <div className="box">
      {children}
    </div>
  );
}

export default Box;