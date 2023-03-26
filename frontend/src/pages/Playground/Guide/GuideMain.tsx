import React, { useState } from "react";
import styles from "./GuideMain.module.css";
import bookimg from "/assets/guidebook.png";
import CocktailGuide from "@/components/Playground/DrinkGuide/CocktailGuide";
import WhiskeyGuide from "@/components/Playground/DrinkGuide/WhiskeyGuide";
import WineGuide from "@/components/Playground/DrinkGuide/WineGuide";
import KoreanGuide from "@/components/Playground/DrinkGuide/KoreanGuide";
import BeerGuide from "@/components/Playground/DrinkGuide/BeerGuide";

const GuideMain: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };
  return (
    <div className={`${styles[`container`]}`}>
      <div className={`${styles[`guide-header`]}`}>
        <img src={bookimg} className={`${styles[`book-img`]}`} />
        <h2 className={`${styles[`drink-guide`]}`}>입문자가이드</h2>
        <img src={bookimg} className={`${styles[`book-img`]}`} />
      </div>
      <div className={`${styles[`feed-classify-btn-container`]}`}>
        <button onClick={() => handleButtonClick("cocktail")}>칵테일</button>
        <button onClick={() => handleButtonClick("whiskey")}>위스키</button>
        <button onClick={() => handleButtonClick("wine")}>와인</button>
        <button onClick={() => handleButtonClick("korean")}>전통주</button>
        <button onClick={() => handleButtonClick("beer")}>맥주</button>
      </div>

      <div className={`${styles[`component-wrap`]}`}>
        {selectedButton === "cocktail" && <CocktailGuide />}
        {selectedButton === "whiskey" && <WhiskeyGuide />}
        {selectedButton === "wine" && <WineGuide />}
        {selectedButton === "korean" && <KoreanGuide />}
        {selectedButton === "beer" && <BeerGuide />}
      </div>
    </div>
  );
};
export default GuideMain;
