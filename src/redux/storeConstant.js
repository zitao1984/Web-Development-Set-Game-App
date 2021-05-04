import { getResetByLevel } from "../data/data";

export const GAME_STATE = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
};

export const INITIAL_STATE = {
  difficulty: "",
  cardBoard: getResetByLevel(GAME_STATE.EASY),
  userSelect: [],
  cardBeenSet: [],
};
