import { createStore } from "redux";
import { INITIAL_STATE } from "./storeConstant";
import {
  ADD_THREE_CARDS,
  RESET,
  USER_SELECT_CARDS,
  SELECT_CARD_BE_ZERO,
  REPLACE_SET_CARD,
  CHANGE_DIFFICULTY,
} from "./actionConstants";

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload.difficulty,
      };

    case ADD_THREE_CARDS:
      return {
        ...state,
        cardBoard: action.payload.cardBoard,
      };
    case RESET:
      return {
        ...state,
        cardBoard: action.payload.cardBoard,
        cardBeenSet: action.payload.cardBeenSet,
      };
    case USER_SELECT_CARDS:
      const s = {
        ...state,
        userSelect: [...action.payload.userSelect],
      };
      console.log(s);
      return s;

    case SELECT_CARD_BE_ZERO:
      return {
        ...state,
        userSelect: [...action.payload.userSelect],
      };

    case REPLACE_SET_CARD:
      return {
        ...state,
        cardBoard: action.payload.cardBoard,
        cardBeenSet: action.payload.cardBeenSet,
      };

    default:
      return state;
  }
};

export default createStore(rootReducer);
