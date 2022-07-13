import React, {useState, useReducer} from 'react';
import questions from './mocks/questions';
// redux
import { Provider } from 'react-redux';
import store from './store/store';

const initialState = {
  questions: questions,
  currentQ: 0,
}



function App() {
  const [state, dispatch] = useReducer(store, initialState);
  function increment() {
    dispatch({type: 'NEXT_QUESTION'});
  }

  function decrement() {
    dispatch({type: 'DECREMENT'});
  }

  return (
    <Provider store={store}>
      <div>
        <button onClick={decrement}>-</button>

        <button onClick={increment}>+</button>
        <span>{state.questions[state.currentQ].title}</span>
      </div>
    </Provider>
  );
}

export default App;
