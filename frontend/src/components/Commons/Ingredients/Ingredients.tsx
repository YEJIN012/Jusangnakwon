import styles from "./Ingredients.module.css";

interface Ingredients {
  ingredients: string[]
}

export default function Ingredients(props: Ingredients) {


  return (
    <div className={`${styles[`row-container`]}`}>
      {props.ingredients.map((ingredient, index) => (
        <div key={index} className={`${styles[`ingredient`]}`}>{ingredient}</div>
      ))}
    </div>
  );
}
