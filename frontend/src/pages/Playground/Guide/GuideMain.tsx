import React, { useState, useEffect } from "react";
import styles from "./GuideMain.module.css";
import bookimg from "/assets/guidebook.png";
import CocktailGuide from "@/components/Playground/DrinkGuide/CocktailGuide";
import WhiskeyGuide from "@/components/Playground/DrinkGuide/WhiskeyGuide";
import WineGuide from "@/components/Playground/DrinkGuide/WineGuide";
import KoreanGuide from "@/components/Playground/DrinkGuide/KoreanGuide";
import BeerGuide from "@/components/Playground/DrinkGuide/BeerGuide";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const GuideMain: React.FC = () => {
  const { pathname } = useLocation();
  // const [selectedButton, setSelectedButton] = useState<string>("cocktail");
  // (pathname.split("/")[3] || "cocktail");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedButton = searchParams.get("selectedButton") || "cocktail";

  // useEffect(() => {
  //   setSelectedButton("cocktail");
  // }, []);

  const navigate = useNavigate();
  // let pathAlcoholType = "";

  // if (pathname != "/playground/guide") {
  //   pathAlcoholType = pathname.split("/")[3];
  // }

  const handleButtonClick = (drinktype: string) => {
    // navigate(`/playground/guide`);
    // setSelectedButton(drinktype);
    navigate(`/playground/guide?selectedButton=${drinktype}`, { replace: true });
  };
  return (
    <div className={`${styles[`container`]}`}>
      <div className={`${styles[`guide-header`]}`}>
        <img src={bookimg} className={`${styles[`book-img`]}`} />
        <h2 className={`${styles[`drink-guide`]}`}>입문자가이드</h2>
        <img src={bookimg} className={`${styles[`book-img`]}`} />
      </div>
      <div className={`${styles[`guide-select-btn-wrap`]}`}>
        {/* <div className={`${styles[`three-btn`]}`}> */}
        <div
          className={`${styles[`guide-select-btn`]} ${
            selectedButton === "cocktail" ? styles[`guide-select-btn-active`] : ""
            // pathAlcoholType === "cocktail" ? styles[`guide-select-btn-active`] : ""
          }`}
          onClick={() => handleButtonClick("cocktail")}
        >
          칵테일
        </div>
        <div
          className={`${styles[`guide-select-btn`]} ${
            selectedButton === "whiskey" ? styles[`guide-select-btn-active`] : ""
            // pathAlcoholType === "whiskey" ? styles[`guide-select-btn-active`] : ""
          }`}
          onClick={() => handleButtonClick("whiskey")}
        >
          위스키
        </div>
        <div
          className={`${styles[`guide-select-btn`]} ${
            selectedButton === "wine" ? styles[`guide-select-btn-active`] : ""
            // pathAlcoholType === "wine" ? styles[`guide-select-btn-active`] : ""
          }`}
          onClick={() => handleButtonClick("wine")}
        >
          와인
        </div>
        {/* </div> */}
        {/* <div className={`${styles[`two-btn`]}`}> */}
        <div
          className={`${styles[`guide-select-btn`]} ${
            selectedButton === "korean" ? styles[`guide-select-btn-active`] : ""
            // pathAlcoholType === "korean" ? styles[`guide-select-btn-active`] : ""
          }`}
          onClick={() => handleButtonClick("korean")}
        >
          전통주
        </div>
        <div
          className={`${styles[`guide-select-btn`]} ${
            selectedButton === "beer" ? styles[`guide-select-btn-active`] : ""
            // pathAlcoholType === "beer" ? styles[`guide-select-btn-active`] : ""
          }`}
          onClick={() => handleButtonClick("beer")}
        >
          맥주
        </div>
        {/* </div> */}
      </div>

      <div className={`${styles[`component-wrap`]}`}>
        {selectedButton === "cocktail" && <CocktailGuide />}
        {selectedButton === "whiskey" && <WhiskeyGuide />}
        {selectedButton === "korean" && <KoreanGuide />}
        {selectedButton === "beer" && <BeerGuide />}
        {selectedButton === "wine" && <WineGuide />}

        {/* {pathAlcoholType === "cocktail" && <CocktailGuide />}
        {pathAlcoholType === "whiskey" && <WhiskeyGuide />}
        {pathAlcoholType === "korean" && <KoreanGuide />}
        {pathAlcoholType === "beer" && <BeerGuide />}
        {pathAlcoholType === "wine" && <WineGuide />} */}
      </div>
    </div>
  );
};
export default GuideMain;
