import styles from "./Ingredients.module.css";
import CancelIcon from "@mui/icons-material/Cancel";

interface Ingredients {
  ingredients: string[];
  delete?: ((x: number) => void);
}

const RandomColor = [
  "var(--tag-color-purple)",
  "var(--tag-color-red)",
  "var(--tag-color-orange)",
  "var(--tag-color-hotpink)",
  "var(--tag-color-green)",
  "var(--tag-color-skyblue)",
];

const Ingredients = (props : Ingredients) => {
  return (
    <div className={`${styles[`flexwrap-container`]}`}>
      {props.ingredients.map((ingredient, index) => (
        <div key={index} className={`${styles[`relative`]}`}>
          <div
            className={`${styles[`ingredient`]}`}
            // style={{ backgroundColor: RandomColor[randomIndex] }}
          >
            {ingredient}
          </div>
          {props.delete? (
            <CancelIcon
              fontSize="small"
              className={`${styles[`delete`]}`}
              onClick={() => {
                if (props.delete) {
                  props.delete(index)
                };
              }}
            />
          ) : <></>}
          
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
