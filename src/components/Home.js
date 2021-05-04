import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeDifficultyLevel, reset } from "../redux/actions";
import { GAME_STATE } from "../redux/storeConstant";

const Home = () => {
  const dispatch = useDispatch();

  const _onClick = (newLevel) => {
    dispatch(changeDifficultyLevel(newLevel));
    dispatch(reset());
  };

  return (
    <div className="main-container">
      <div className="padding-10">
        <div>
          <h2>Welcome!</h2>
          <div>Choose a level of difficulty below to get started:</div>
        </div>
        <div className="padding-30">
          <div className="row">
            <div className="col-sm" className="general-padding">
              <Link to="/easy">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => _onClick(GAME_STATE.EASY)}
                >
                  Easy
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm" className="general-padding">
              <Link to="/medium">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => _onClick(GAME_STATE.MEDIUM)}
                >
                  Medium
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm" className="general-padding">
              <Link to="/hard">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => _onClick(GAME_STATE.HARD)}
                >
                  Hard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
