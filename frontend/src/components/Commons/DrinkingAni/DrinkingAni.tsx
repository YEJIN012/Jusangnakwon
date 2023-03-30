import styles from "./DrinkingAni.module.css";

const DrinkingAni = () => {
  return (
    <div className={`${styles[`container`]}`}>
      <> 
      <div className={`${styles[`whisky`]}`}>
        <div className={`${styles[`whiskyglass`]}`}></div>
        <div className={`${styles[`whiskycontent`]}`}>
          <div className={`${styles[`ice`]}`}></div>
          <div className={`${styles[`ice`]}`}></div>
          <div>
            <div className={`${styles[`whiskydetail`]}`}></div>
            <div className={`${styles[`whiskydetail`]}`}></div>
          </div>
        </div>
      </div>

      <div className={`${styles[`cocktail`]}`}>
        <div className={`${styles[`straw`]}`}></div>
        <div className={`${styles[`cocktailglass`]}`}></div>
        <div className={`${styles[`glassfoot`]}`}></div>
        <div className={`${styles[`cocktaildetail`]}`}>
          <div></div>
          <div></div>
        </div>
        <div className={`${styles[`cocktailbubble`]}`}>
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

      <div className={`${styles[`beer`]}`}>
        <div className={`${styles[`glass`]}`}>
          <div className={`${styles[`foam`]}`}></div>
          <div className={`${styles[`foam`]}`}></div>
          <div className={`${styles[`foam`]}`}></div>
          <div className={`${styles[`foam`]}`}></div>
          <div>
            <div className={`${styles[`drip`]}`}></div>
            <div className={`${styles[`drip`]}`}></div>
          </div>
          <div>
            <div className={`${styles[`bubble`]}`}></div>
            <div className={`${styles[`bubble`]}`}></div>
            <div className={`${styles[`bubble`]}`}></div>
            <div className={`${styles[`bubble`]}`}></div>
          </div>
        </div>
        <div>
          <div className={`${styles[`glassEffect`]}`}></div>
          <div className={`${styles[`glassEffect`]}`}></div>
        </div>
      </div>
      </>
    </div>
  );
};

export default DrinkingAni;
