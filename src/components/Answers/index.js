import React from 'react';
import './styles.css';

//import Title from '../Title';

function Answers({
  answers,
  onAnswerSelected,
  isActived
}) {
  return (
    <ul>
      {answers.map((ans) => (
        <li onClick={() => onAnswerSelected(ans.id)}
            className = "question-list-item"
            key = {ans.id}
            style={{
            backgroundColor: isActived ? 'salmon' : '',
            color: isActived ? 'white' : '',
            }}
        >
          {ans.label}
        </li>
      ))}
    </ul>
  );
}

export default Answers;
