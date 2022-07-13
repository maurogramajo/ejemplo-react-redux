import React from 'react';
import Box from '../Box';
import Question from '../Question';

function QuestionBox({ question, onAnswerSelected, points }) {
    //console.info(question);
  return (
    <div>
      <Box>
        <Question question = {question} onAnswerSelected={onAnswerSelected} />
        <p>{points}</p>
      </Box>
    </div>
    );
}

export default QuestionBox;