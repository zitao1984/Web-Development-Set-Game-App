import { combinationEasy, combination } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { GAME_STATE } from "../../redux/storeConstant";
import Card from "./Card";
import { replaceSetCard, selectCardBeZero } from "../../redux/actions";

const Board = () => {
  const cardBoard = useSelector((state) => state.cardBoard);
  const difficulty = useSelector((state) => state.difficulty);
  const userSelect = useSelector((state) => state.userSelect);
  const dispatch = useDispatch();

  const checkOneSet = (selectCard) => {
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

  const check = () => {
    if (userSelect.length === 3) {
      const result = checkOneSet(userSelect);
      if (result) {
        alert("That's a set!");
        dispatch(replaceSetCard());
      } else {
        alert("That's not a set!");
      }
      dispatch(selectCardBeZero());
    }
  };

  return (
    <div>
      <div className="board">
        <div className="board-container">
          {difficulty === GAME_STATE.EASY
            ? cardBoard.map((patternIndex, index) => {
                // const selected = userSelect.includes(patternIndex);
                return (
                  <div className="cards">
                    <Card
                      shape={combinationEasy[patternIndex].shape}
                      color={combinationEasy[patternIndex].color}
                      shading={combinationEasy[patternIndex].shading}
                      number={combinationEasy[patternIndex].number}
                      cardIndex={patternIndex}
                      cardSet={combinationEasy}
                      // selected={selected}
                    />
                  </div>
                );
              })
            : cardBoard.map((patternIndex, index) => {
                // const selected = userSelect.includes(patternIndex);
                return (
                  <div className="cards">
                    <Card
                      shape={combination[patternIndex].shape}
                      color={combination[patternIndex].color}
                      number={combination[patternIndex].number}
                      shading={combination[patternIndex].shading}
                      cardIndex={patternIndex}
                      cardSet={combination}
                      // selected={selected}
                    />
                  </div>
                );
              })}
        </div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-success"
          onClick={() => check()}
          disabled={!(userSelect.length === 3)}
        >
          {" "}
          Submit!
        </button>
      </div>
    </div>
  );
};

export default Board;
