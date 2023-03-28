import styles from "./DrinkingAni.module.css";

const DrinkingAni = () => {
  return (
    // <div className={`${styles[`container`]}`}>
    <>
      <div id="whisky">
        <div id="whisky glass"></div>
        <div id="whisky content">
          <div className={`${styles[`ice`]}`}></div>
          <div className={`${styles[`ice`]}`}></div>
          <div>
            <div className={`${styles[`whiskydetail`]}`}></div>
            <div className={`${styles[`whiskydetail`]}`}></div>
          </div>
        </div>
      </div>

      <div id="cocktail">
        <div id="straw"></div>
        <div id="cocktail glass"></div>
        <div id="glass foot"></div>
        <div id="cocktail detail">
          <div></div>
          <div></div>
        </div>
        <div id="cocktail bubble">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div id="beer">
        <div id="glass">
          <div className={`${styles[`foam`]}`}></div>
          <div className={`${styles[`foam`]}`}></div>
          <div className={`${styles[`foam`]}`}></div>
          <div className={`${styles[`foam`]}`}></div>
          <div>
            <div className={`${styles[`foam drip`]}`}></div>
            <div className={`${styles[`foam drip`]}`}></div>
          </div>
          <div>
            <div className={`${styles[`bubble`]}`}></div>
            <div className={`${styles[`bubble`]}`}></div>
            <div className={`${styles[`bubble`]}`}></div>
            <div className={`${styles[`bubble`]}`}></div>
          </div>
        </div>
        <div id="details">
          <div className={`${styles[`glassEffect`]}`}></div>
          <div className={`${styles[`glassEffect`]}`}></div>
        </div>
      </div>
    </>
    // </div>
  );
};

export default DrinkingAni;
