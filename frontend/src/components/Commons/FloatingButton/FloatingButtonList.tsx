import { Link } from "react-router-dom";
import styles from "./FloatingButton.module.css";
import CreateIcon from "@mui/icons-material/Create";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LocalBarIcon from "@mui/icons-material/LocalBar";

const types = [
  { icon: <CreateIcon />, name: "리뷰", path: "review" },
  { icon: <QuestionMarkIcon />, name: "질문글", path: "question" },
  { icon: <LocalBarIcon />, name: "레시피", path: "recipe" },
];

const FloatingButtonList = () => {
  return (
    <div className={`${styles[`dial-box`]}`}>
      {types.map((type, index) => (
        <Link key={index} to={`/write/${type.path}`} className={`${styles[`dial-item`]}`}>
          {type.icon}
          {type.name}
        </Link>

      ))}
    </div>
  );
};

export default FloatingButtonList;
