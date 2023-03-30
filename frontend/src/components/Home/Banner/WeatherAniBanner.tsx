import styles from "./WeatherAniBanner.module.css";

const Hot = () => {
  return (
      <div className={`${styles[`hot`]}`}>
        <div>오늘의 온도는 25℃</div>
        <div>안녕하세요</div>
        <span className={`${styles[`sun`]}`}></span>
        <span className={`${styles[`sunx`]}`}></span>
        <span className={`${styles[`sunx2`]}`}></span>
      </div>
  );
};

const Cloud = () => {
  return (
    <div className={`${styles[`cloudy`]}`}>
      <span className={`${styles[`cloud`]}`}></span>
      <span className={`${styles[`cloudx`]}`}></span>
    </div>
  );
};

const Snow = () => {
  return (
    <div className={`${styles[`stormy`]}`}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <span className={`${styles[`snowe`]}`}></span>
      <span className={`${styles[`snowex`]}`}></span>
      <span className={`${styles[`stick`]}`}></span>
      <span className={`${styles[`stick2`]}`}></span>
    </div>
  );
};

const Rain = () => {
  return (
    <div className={`${styles[`breezy`]}`}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <span className={`${styles[`cloudr`]}`}></span>
      <span className={`${styles[`cloudr2`]}`}></span>
    </div>
  );
};

const Moon = () => {
  return (
    <div className={`${styles[`night`]}`}>
      <span className={`${styles[`moon`]}`}></span>
      <span className={`${styles[`spot1`]}`}></span>
      <span className={`${styles[`spot2`]}`}></span>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default function WeatherAniBanner() {
  return (
      <>
        {/* Hot Cloud Snow Rain */}
        <Hot></Hot>
      </>
  );
}
