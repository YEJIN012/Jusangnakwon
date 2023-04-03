import styles from "./ConfettiButton.module.css";
import confetti from "canvas-confetti";

interface Props {
  filledForm: boolean;
}

const ConfettiButton = (props: Props) => {
  const { filledForm } = props;
  const onClick = () => {
    if (filledForm) {
      confetti({
        particleCount: 150,
        spread: 60,
        origin: {
          x: 0.5,
          // since they fall down, start a bit higher than random
          y: 0.85,
        },
      });
    }
  };
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
