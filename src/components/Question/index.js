import React, {useState} from 'react';

import Title from '../Title';
import Answers from '../Answers';

const Question = ({ question, onAnswerSelected }) => {
  //console.info(question.title);
  return(
    <div className="question-container">
      <Title label={question.title} />
      <Answers answers={question.answers} onAnswerSelected={onAnswerSelected} />
    </div>
  );

}

export default Question;