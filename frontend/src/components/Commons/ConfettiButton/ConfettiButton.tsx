import styles from "./ConfettiButton.module.css";
import confetti from "canvas-confetti";

const ConfettiButton = () => {
  //   const onClick = () => {
  //     return (<Confetti numberOfPieces={150} width={393} height={800} />)
  //   }
    const onClick = () => {
      
    confetti({
      particleCount: 150,
      spread: 60,
      origin: {
        x: 0.5,
        // since they fall down, start a bit higher than random
        y: 0.9
      }
    });
  }
  return (
    <div className={`${styles[`container`]}`}>
      <button
        className={`${styles[`confetti-button`]}`}
        onClick={() => {
          onClick();
        }}
      >
        <span>🎉</span>
        <span>완료</span>
      </button>
    </div>
  );
};
export default ConfettiButton;
