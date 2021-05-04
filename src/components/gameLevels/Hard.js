import Board from "../card/Board";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  addThreeCard,
  changeDifficultyLevel,
} from "../../redux/actions";
import { GAME_STATE } from "../../redux/storeConstant";
import { isGameOver } from "../../data/data";

const Hard = (props) => {
  const cardBoard = useSelector((state) => state.cardBoard);
  const difficulty = useSelector((state) => state.difficulty);
  const cardBeenSet = useSelector((state) => state.cardBeenSet);
  const dispatch = useDispatch();

  const checkLeftCardHard = () => {
    return cardBoard.length + cardBeenSet.length >= 81;
  };

  const check = checkLeftCardHard();
  console.log(check);

  dispatch(changeDifficultyLevel(GAME_STATE.HARD));
  console.log("This level is " + difficulty);

  return (
    <div className="main-container">
      <div className="game">
        {/* Create a Congratulations message if there is no more set in the remaining cards on the board */}
        {isGameOver(cardBoard, difficulty) && cardBoard.length < 12 ? (
          <div>
            <h2>No more possible set.</h2>
            <h1>Congratulations!</h1>
          </div>
        ) : (
          <div className="board-space">
            <Board />
          </div>
        )}
        <div>
          <div className="row game-row">
            <div className="col-sm general-padding">
              <button
                className="btn btn-danger btn-lg pad"
                onClick={() => dispatch(reset())}
              >
                Reset
              </button>
            </div>
            <div className="col-sm general-padding">
              {cardBoard.length <= 18 ? (
                <button
                  className="btn btn-info btn-lg pad"
                  onClick={() => dispatch(addThreeCard())}
                  disabled={check}
                >
                  Add 3 Cards
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hard;
