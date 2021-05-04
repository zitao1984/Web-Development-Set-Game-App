// 1) COLOR: Each card is red, green, or blue.
// 2) SYMBOL: Each card contains ovals, squiggles, or diamonds.
// 3) NUMBER: Each card has one, two, or three symbols.
// 4) SHADING: Each card is solid, open, or striped.

import combinate from "combinate";
import { GAME_STATE } from "../redux/storeConstant";

const option = {
  shape: ["oval", "squiggle", "diamond"],
  color: ["red", "green", "blue"],
  number: [1, 2, 3],
  shading: ["solid", "open", "striped"],
};

// export const combinationEasy = combinate(optionEasy);
export const combination = combinate(option);

const easyMode = (data, comb) => {
  const key = Object.keys(data)[Math.floor(Math.random() * 4)];
  const valueIndex = Math.floor(Math.random() * 3);
  return comb.filter((pattern) => pattern[key] === data[key][valueIndex]);
};
export const combinationEasy = easyMode(option, combination);
console.log(combinationEasy);

const indexList = (totalNumber, cardNumber) => {
  const arr = [];
  while (arr.length < cardNumber) {
    const r = Math.floor(Math.random() * totalNumber);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};

export const getResetByLevel = (level) => {
  let index;
  if (level === GAME_STATE.EASY) {
    index = indexList(27, 12);
  } else {
    index = indexList(81, 12);
  }
  console.log(index);
  return index;
};

const getThreeRandomCards = (currentBoardCard, currentLevel, removeCard) => {
  let i;
  let extraCard = [];
  if (currentLevel === GAME_STATE.EASY) {
    const totalNumber = Array(27)
      .fill()
      .map((element, index) => index);
    let difference = totalNumber.filter((x) => !currentBoardCard.includes(x));
    let differenceAfterRemove = difference.filter(
      (x) => !removeCard.includes(x)
    );
    const list = indexList(differenceAfterRemove.length, 3);
    for (i = 0; i < 3; i++) {
      extraCard.push(differenceAfterRemove[list[i]]);
    }
  } else {
    const totalNumber = Array(81)
      .fill()
      .map((element, index) => index);
    let difference = totalNumber.filter((x) => !currentBoardCard.includes(x));
    let differenceAfterRemove = difference.filter(
      (x) => !removeCard.includes(x)
    );
    const list = indexList(differenceAfterRemove.length, 3);
    for (i = 0; i < 3; i++) {
      extraCard.push(differenceAfterRemove[list[i]]);
    }
  }
  return extraCard;
};

export const getThreeMoreCards = (
  currentBoardCard,
  currentLevel,
  removeCard
) => {
  let extraCard = getThreeRandomCards(
    currentBoardCard,
    currentLevel,
    removeCard
  );
  // let extraCard = getThreeRandomCards(currentBoardCard,currentLevel)
  const boardCard = currentBoardCard.concat(extraCard);
  console.log(boardCard);
  return boardCard;
};

export const getUserSelectedCard = (currentUserSelect, newCardIndex) => {
  if (currentUserSelect.includes(newCardIndex)) {
    let index = currentUserSelect.indexOf(newCardIndex);
    if (index !== -1) {
      currentUserSelect.splice(index, 1);
    }
    return currentUserSelect;
  }
  if (currentUserSelect.length >= 3) {
    return currentUserSelect;
  } else {
    currentUserSelect.push(newCardIndex);
    return currentUserSelect;
  }
};

export const replaceThreeSetCard = (
  currentUserSelect,
  cardBoard,
  cardInSet,
  currentLevel
) => {
  let extraCard = getThreeRandomCards(cardBoard, currentLevel, cardInSet);
  console.log("EXTRA " + extraCard);
  let boardCard = cardBoard.concat(extraCard);
  boardCard = boardCard.filter((x) => !currentUserSelect.includes(x));

  return boardCard;
};

export const highlightCardByUser = (
  currentCardIndex,
  userSelect,
  cardHighlight
) => {
  console.log(userSelect);
  console.log(currentCardIndex);
  console.log(userSelect.indexOf(currentCardIndex));
  cardHighlight[userSelect.indexOf(currentCardIndex)] = true;
  return cardHighlight;
};

export const checkIfASet = (selectCard, difficulty) => {
  let cardSet;
  if (difficulty === GAME_STATE.EASY) {
    cardSet = combinationEasy;
  } else {
    cardSet = combination;
  }
  const card0 = cardSet[selectCard[0]];
  const card1 = cardSet[selectCard[1]];
  const card2 = cardSet[selectCard[2]];
  const check = [];
  for (let i = 0; i < 4; i++) {
    check[i] =
      (card0[Object.keys(card0)[i]] === card1[Object.keys(card1)[i]] &&
        card1[Object.keys(card1)[i]] === card2[Object.keys(card2)[i]] &&
        card0[Object.keys(card0)[i]] === card2[Object.keys(card2)[i]]) ||
      (card0[Object.keys(card0)[i]] !== card1[Object.keys(card1)[i]] &&
        card1[Object.keys(card1)[i]] !== card2[Object.keys(card2)[i]] &&
        card0[Object.keys(card0)[i]] !== card2[Object.keys(card2)[i]]);
  }
  return !check.includes(false);
};

// Find all possible 3-cards combinations from the array of cards currently shown on the board
// This algorithm was modified from an example found here:
// https://stackoverflow.com/questions/43241174/javascript-generating-all-combinations-of-elements-in-a-single-array-in-pairs
export const isThereASet = (currentBoardCard, currentLevel) => {
  let isASet = false;
  console.log(currentBoardCard);
  for (let i = 0; i < currentBoardCard.length - 2; i++) {
    for (let j = i + 1; j < currentBoardCard.length - 1; j++) {
      for (let k = j + 1; k < currentBoardCard.length; k++) {
        let comb = [];
        comb.push(currentBoardCard[i]);
        comb.push(currentBoardCard[j]);
        comb.push(currentBoardCard[k]);
        if (checkIfASet(comb, currentLevel)) {
          console.log("There is a set on the board");
          console.log(comb);
          isASet = true;
          return isASet;
        }
      }
    }
  }
  console.log("There is no possible set on the board");
  return isASet;
};

export const isGameOver = (currentBoardCard, currentLevel) => {
  let gameIsOver = false;
  if (
    !isThereASet(currentBoardCard, currentLevel) ||
    currentBoardCard.length === 0
  ) {
    console.log("There is no possible set and the game may be over.");
    gameIsOver = true;
  }
  return gameIsOver;
};
