import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const onClick = (index: number) => {
    navigate(`/write/${types[index].path}`, { state: { from: location.pathname } });
  };

  return (
    <div className={`${styles[`dial-box`]}`}>
      {types.map((type, index) => (
        <div key={index} className={`${styles[`dial-item`]}`} onClick={() => onClick(index)}>
          {type.icon}
          {type.name}
        </div>
      ))}
    </div>
  );
};

export default FloatingButtonList;
