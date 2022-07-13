import React, {useState, useReducer} from 'react';
import QuestionBox from './components/QuestionBox';
import questions from './mocks/questions';

import { TYPES } from './actions/questionActions';
import { questionReducer } from './reducers/questionReducer';
// redux
//import { Provider } from 'react-redux';
//import store from './store/store';

const initialState = {
  questions: questions,
  currentQ: 0,
  puntos: 0,
}

function App() {
  const [state, dispatch] = useReducer(questionReducer, initialState);
  function increment() {
    dispatch({type: TYPES.NEXT_QUESTION});
  }

  function reset() {
    dispatch({type: TYPES.RESET});
  }

  function answerSelected(id) {
    dispatch({type: TYPES.ANSWER_SELECTED, payload: id});
    dispatch({type: TYPES.NEXT_QUESTION});
  }

  return (
    //<Provider store={store}>
    <div>
      <QuestionBox question = {state.questions[state.currentQ]} onAnswerSelected={answerSelected} points={state.puntos} />
      <button onClick={reset}>RESET</button>
    </div>
    //</Provider>
  );
}

export default App;
