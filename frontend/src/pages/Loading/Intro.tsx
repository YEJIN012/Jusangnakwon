import DrinkingAni from "@/components/Commons/DrinkingAni/DrinkingAni";
import styles from "./Loading.module.css";
import img from "/assets/neon-beer.png"
import img2 from "/assets/neon-welcome.png"
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
    <div style={{ display: "flex", justifyContent: "start",alignItems:"center", height: "100vh-114px", width:""}}>
      <div style={{ display: "flex", flexDirection:"column"}}>

      <div className={`${styles[`cantilever`]}`}></div>
      </div>
      <NeonTitle></NeonTitle>

      {/* <div style={{ position: "absolute"}}> */}
        {/* <DrinkingAni></DrinkingAni> */}
        <img className={`${styles[`img-ani`]}`} src={img} style={{position:"absolute",bottom:"45px",right:"45px",width:"180px"}} alt="" />
        <img className={`${styles[`img-ani2`]}`} src={img2} style={{position:"absolute",bottom:"100px",right:"1px",width:"300px"}} alt="" />
      {/* </div> */}
    </div>
  );
};

export default Intro;
