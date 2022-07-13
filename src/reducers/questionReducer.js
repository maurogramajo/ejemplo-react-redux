import { TYPES } from "../actions/questionActions";

export function questionReducer(state, action) {
  switch(action.type) {
    case TYPES.NEXT_QUESTION:
      if((state.currentQ + 1) < state.questions.length)
        return {...state, currentQ: state.currentQ + 1};
      else
        return state;
    case TYPES.RESET:
      return {...state, currentQ: 0, puntos: 0};
    case TYPES.ANSWER_SELECTED:
      //console.info(state.questions[state.currentQ].answers[action.payload].correct);
      if(state.questions[state.currentQ].answers[action.payload].correct) {
        return {...state, puntos: state.puntos + 10};
      }
      return state;
    default:
      return state;
  }
}