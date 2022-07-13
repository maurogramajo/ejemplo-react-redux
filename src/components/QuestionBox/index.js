import React from 'react';
import Box from '../Box';
import Question from '../Question';

function QuestionBox({ question }) {
    //console.info(question);
  return (
    <div>
      <Box>
        <Question question = {question}/>
        <p>React⚛️ + Vite⚡ + Replit🌀</p>
      </Box>
    </div>
    );
}

export default QuestionBox;