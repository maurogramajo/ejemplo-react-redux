
function reducer(state, action) {
  switch(action.type) {
    case 'NEXT_QUESTION':
      if((state.currentQ + 1) < state.questions.length)
        return {...state, currentQ: state.currentQ + 1};
      else
        return state;
    case 'DECREMENT':
      if((state.currentQ - 1) > 0)
        return {...state, currentQ: state.currentQ - 1};
      else
        return state;
    default:
      return state;
  }
}

export default reducer;