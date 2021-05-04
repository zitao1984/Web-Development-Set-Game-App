import { useDispatch, useSelector } from "react-redux";
import { userSelectCards } from "../../redux/actions";

const Card = (props) => {
  const userSelect = useSelector((state) => state.userSelect);
  const dispatch = useDispatch();

  const fileName =
    props.shape + "_" + props.shading + "_" + props.color + ".png";
  const key =
    props.shape + "_" + props.shading + "_" + props.color + "_" + props.number;

  const createPatternList = () => {
    const patternList = [];
    for (let i = 0; i < props.number; i++) {
      patternList.push(fileName);
    }
    return patternList;
  };

  let classNameStr = "card-container";
  if (userSelect.includes(props.cardIndex)) {
    classNameStr += " highlighted";
  }

  const patternList = createPatternList();

  return (
    <div
      className={classNameStr}
      onClick={() => dispatch(userSelectCards(props.cardIndex))}
    >
      {/*{console.log("here")}*/}
      <a>
        {patternList.map((file, index) => (
          <div>
            <img src={"/images/" + file} alt={fileName} key={key} />
          </div>
        ))}
      </a>
    </div>
  );
};

export default Card;
