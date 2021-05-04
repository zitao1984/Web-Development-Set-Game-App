import {
  RESET,
  ADD_THREE_CARDS,
  USER_SELECT_CARDS,
  REPLACE_SET_CARD,
  SELECT_CARD_BE_ZERO,
  CHANGE_DIFFICULTY,
} from "./actionConstants";
import { GAME_STATE } from "./storeConstant";
import store from "./store";
import {
  getResetByLevel,
  getThreeMoreCards,
  getUserSelectedCard,
  replaceThreeSetCard,
} from "../data/data";

export const changeDifficultyLevel = (newLevel) => {
  return {
    type: CHANGE_DIFFICULTY,
    payload: {
      difficulty: newLevel,
    },
  };
};

export const reset = () => {
  const currentLevel = store.getState().difficulty;
  return {
    type: RESET,
    payload: {
      cardBoard: getResetByLevel(currentLevel),
      cardBeenSet: [],
    },
  };
};

export const addThreeCard = () => {
  const currentBoard = store.getState().cardBoard;
  const currentLevel = store.getState().difficulty;
  const currentUserSelect = store.getState().userSelect;
  const cardBeenSet = store.getState().cardBeenSet;
  const cardInSet = cardBeenSet.concat(currentUserSelect);
  return {
    type: ADD_THREE_CARDS,
    payload: {
      cardBoard: getThreeMoreCards(currentBoard, currentLevel, cardInSet),
    },
  };
};

export const userSelectCards = (newCardIndex) => {
  const currentUserSelect = store.getState().userSelect;
  return {
    type: USER_SELECT_CARDS,
    payload: {
      userSelect: getUserSelectedCard(currentUserSelect, newCardIndex),
    },
  };
};

export const selectCardBeZero = () => {
  return {
    type: SELECT_CARD_BE_ZERO,
    payload: {
      userSelect: [],
    },
  };
};

export const replaceSetCard = () => {
  const currentUserSelect = store.getState().userSelect;
  const cardBoard = store.getState().cardBoard;
  const cardBeenSet = store.getState().cardBeenSet;
  const cardInSet = cardBeenSet.concat(currentUserSelect);
  const currentLevel = store.getState().difficulty;
  console.log("cardboard " + cardBoard);
  console.log("CardInSet " + cardInSet);
  console.log("userselect " + currentUserSelect);

  if (
    (currentLevel === GAME_STATE.EASY &&
      cardInSet.length + cardBoard.length - currentUserSelect.length === 27) ||
    (currentLevel !== GAME_STATE.EASY &&
      cardInSet.length + cardBoard.length - currentUserSelect.length === 81)
  ) {
    return {
      type: REPLACE_SET_CARD,
      payload: {
        cardBoard: cardBoard.filter((x) => !currentUserSelect.includes(x)),
        cardBeenSet: cardInSet,
      },
    };
  } else {
    return {
      type: REPLACE_SET_CARD,
      payload: {
        cardBoard: replaceThreeSetCard(
          currentUserSelect,
          cardBoard,
          cardInSet,
          currentLevel
        ),
        cardBeenSet: cardInSet,
      },
    };
  }
};
