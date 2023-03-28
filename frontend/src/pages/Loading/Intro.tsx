import DrinkingAni from "@/components/Commons/DrinkingAni/DrinkingAni";
import styles from "./Loading.module.css";

const NeonTitle = () => {
  return (
    <>
      <div className={`${styles[`container`]}`}>
        <h6 id="text" spellCheck={false}>
          주상낙원
        </h6>
      </div>
    </>
  );
};

const Intro = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", marginTop: "20vh" , width:""}}>
      <NeonTitle></NeonTitle>
      {/* <div style={{scale:"0.5"}}> */}

      {/* <DrinkingAni></DrinkingAni> */}
      {/* </div> */}
    </div>
  );
};

export default Intro;
