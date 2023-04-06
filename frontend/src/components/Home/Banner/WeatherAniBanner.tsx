import styles from "./WeatherAniBanner.module.css";
import { WeatherApiData } from "@/pages/Home/HomeMain";

const Hot = () => {
  return (
    <div className={`${styles[`hot`]}`}>
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

// const Moon = () => {
//   return (
//     <div className={`${styles[`night`]}`}>
//       <span className={`${styles[`moon`]}`}></span>
//       <span className={`${styles[`spot1`]}`}></span>
//       <span className={`${styles[`spot2`]}`}></span>
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//     </div>
//   );
// };



const WeatherAniBanner = (props: WeatherApiData) => {
  const message = props?.message != undefined ? props?.message.split("/n") : [];

  const weatherAni: {
    [key: string]: JSX.Element;
  } = {
    a: <Rain></Rain>,
    b: <Hot></Hot>,
    c: <Cloud></Cloud>,
    d: <Hot></Hot>,
    e: <Cloud></Cloud>,
    f: <Snow></Snow>,
    g: <Cloud></Cloud>,
  };

  return (
    <div className={`${styles[`wrapper`]}`}>
      {props.type !== undefined && weatherAni[props.type]}
      <div className={`${styles[`message-container`]}`}>
        {message.map((m, index) => {
          return <p key={index}>{m}</p>;
        })}
      </div >
      <div className={`${styles[`temperature-container`]}`}>
        <p>{props?.temperature}℃</p>
      </div>
    </div>
  );
};
export default WeatherAniBanner;
