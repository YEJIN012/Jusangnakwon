import styles from "@/components/Playground/DrinkGuide/CocktailGuide.module.css";
import cocktailmaking from "/assets/cocktail-making.png";

const CocktailGuide = () => {
  return (
    <div className={`${styles[`container`]}`}>
      <h1 className={`${styles[`drinktype`]}`}> COCKTAIL</h1>
      <div className={`${styles[`content-wrap`]}`}>
        <h3 className={`${styles[`small-title`]}`}>칵테일 제조 기법</h3>
        <div className={`${styles[`img-box`]}`}>
          <img src={cocktailmaking} />
        </div>
        <div>
          <h3>1. 쌓아서 만들기</h3>
          <div>※ 술잔에다 재료들을 그대로 쌓아 올려서 만드는 가장 단순한 기법의 칵테일</div>
        </div>
        <br />
        <div>
          <h3>2. 저어서 만들기</h3>
          <div>
            ※ 쌓아서 만드는 것보다 얼음을 좀 더 적극적으로 활용하는 기법. 믹싱글라스에 술과 얼음을 넣고 바스푼으로
            저어주면 음료는 빠르게 식으면서 얼음이 녹아 물과 희석됨. 작은 잔에 마시는 숏드링크 류에 많이 사용되는 기법.
            충분히 저어주지 않으면 음료가 덜 시원하거나 맛이 너무 강할 수 있고, 반대로 너무 많이 저으면 그만큼 물이 많이
            희석돼서 맛이 밍밍해질 수 있음.
          </div>
        </div>
        <br />

        <div>
          <h3>3. 흔들어서 만들기</h3>
          <div>
            ※ 저어서 만들때보다 얼음을 한층 더 활용하는 기법. 훨씬 더 빠르게 식힐 수 있고, 잘 섞이지 않는 재료도 빠르고
            수월하게 섞을 수 있음. 예를 들면 끈적한 시럽이나 계란 흰자가 들어가는 칵테일엔 필수적인 기법. 얼음이 많이
            희석되고 쉐이킹 과정에서 생긴 기포가 음료를 다소 탁해보이게 만들 수도 있음.
          </div>
        </div>
        <br />
        <div>→ 만들고자 하는 칵테일에 따라 기법이 달라져야함</div>
        <h3 className={`${styles[`small-title`]}`}>대표적인 칵테일 베이스</h3>
        <p>1. 보드카 2. 진 3. 럼 4. 데킬라 5. 위스키 6. 브랜디</p>
        <h3 className={`${styles[`small-title`]}`}>나에게 맞는 칵테일 찾는 가장 좋은 방법</h3>
        <div>
          1. 바에 가서 취향에 맞는 칵테일을 추천받아 먹어보고
          <br />
          거기서부터 스펙트럼을 점차 넓혀가는걸 추천!
        </div>
        <br />
        <div>2. 하지만 바에 갈 자신감이 없다면? → 주상낙원! </div>
      </div>
    </div>
  );
};

export default CocktailGuide;
