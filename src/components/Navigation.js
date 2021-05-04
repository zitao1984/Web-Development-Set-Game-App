import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCardBeZero } from "../redux/actions";

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <div className="nav">
      <div className="row nav-row">
        <div className="col-sm col">
          <Link to="/">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(selectCardBeZero())}
            >
              Home
            </button>
          </Link>
        </div>
        <div className="col-sm col">
          <img
            className="nav-image"
            src="/images/set_cards.png"
            alt="Set Card"
          />
        </div>
        <div className="col-sm col">
          <Link to="/rules">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(selectCardBeZero())}
            >
              Rules
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
