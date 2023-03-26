import { useEffect, useState } from "react";
import styles from "./TopButton.module.css";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    console.log(window.scrollY);
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return showButton === true ? (
      <button id="top" className={`${styles["top-button-container"]}`} onClick={scrollToTop} type="button">
        <KeyboardArrowUpRoundedIcon />
      </button>
  ) : (
    <></>
  );
};

export default TopButton;
