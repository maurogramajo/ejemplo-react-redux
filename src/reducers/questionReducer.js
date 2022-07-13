import { TYPES } from "../actions/questionActions";

export function questionReducer(state, action) {
  switch(action.type) {
    case TYPES.NEXT_QUESTION:
      if((state.currentQ + 1) < state.questions.length)
        return {...state, currentQ: state.currentQ + 1};
      else
        return state;
    case TYPES.RESET:
      return {...state, currentQ: 0};
    default:
      return state;
  }
}