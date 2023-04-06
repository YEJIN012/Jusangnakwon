import styles from "./Ingredients.module.css";
import CancelIcon from "@mui/icons-material/Cancel";

interface Ingredients {
  ingredients: string[];
  randomcolor?: boolean;
  delete?: (x: number) => void;
  taste?: boolean;
}

const RandomColor: string[] = [
  "var(--tag-color-purple)",
  "var(--tag-color-red)",
  "var(--tag-color-orange)",
  "var(--tag-color-hotpink)",
  "var(--tag-color-green)",
  "var(--tag-color-skyblue)",
  "var(--tag-color-a)",
  "var(--tag-color-b)",
  "var(--tag-color-c)",
  "var(--tag-color-d)",
  "var(--tag-color-e)",
];

const TasteColor: { [key: string]: string } = {
  당도: "var(--tag-color-lightpurple)",
  산도: "var(--tag-color-lightgold)",
  쓴맛: "var(--tag-color-lightgreen)",
  짠맛: "var(--tag-color-lightskyblue)",
  바디감: "var(--tag-color-blue)",
  아로마: "var(--tag-color-orange)",
};

const Ingredients = (props: Ingredients) => {
  return (
    <div className={`${styles[`flexwrap-container`]}`}>
      {props.ingredients.map((ingredient, index) => (
        <div key={index} className={`${styles[`relative`]}`}>
          {props.taste ? (
            <div style={{ backgroundColor: TasteColor[index] }} className={`${styles[`ingredient`]}`}>
              {ingredient}
            </div>
          ) : (
            <div
              style={{ backgroundColor: RandomColor[Math.floor(Math.random() * 11)] }}
              className={`${styles[`ingredient`]}`}
            >
              {ingredient}
            </div>
          )}
          {props.delete ? (
            <CancelIcon
              fontSize="small"
              className={`${styles[`delete`]}`}
              onClick={() => {
                if (props.delete) {
                  props.delete(index);
                }
              }}
            />
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
