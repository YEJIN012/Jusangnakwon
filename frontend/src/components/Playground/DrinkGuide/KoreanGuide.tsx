import styles from "@/components/Playground/DrinkGuide/KoreanGuide.module.css";

const KoreanGuide = () => {
  return (
    <div className={`${styles[`container`]}`}>
      <h1 className={`${styles[`drinktype`]}`}>TRADITIONAL LIQUOR</h1>
      <div className={`${styles[`content-wrap`]}`}>
        <h3 className={`${styles[`small-title`]}`}>전통주 종류</h3>
        <div>
          전통주는 크게 발효주류, 증류주류, 기타주류로 나뉨.
          <br />
          <br />
          발효주류 : 탁주, 약주, 청주, 과실주 <br />
          증류주류: 소주, 일반증류주, 리큐르
          <br />
          기타주류: 그 외~ <br />
          <br />
          1. 탁주: 쌀의 입자가 남아 있는 탁한 술.막걸리와 비슷한 주종. 정확하게는 막걸리가 탁주의 부분집합
          <br />
          <br />
          2. 약주/청주: 탁주는 원주를 그대로 상품화 하는 것이라면,
          <br />
          약주는 원주를 여과(걸러냄)를 통해 맑은 술로 만들어 상품화한 것. 여과를 시켰기 때문에 쌀 알갱이 없이 연노랑의
          빛깔을 띠는 경우가 대부분이고 달큰하고 감칠맛이 나며, 대개 도수는 13~16정도.
          <br />
          <br />
          → 탁주 약주 청주는 무조건 시원하게 보관. <br />
          공기와 맞닿아서 좋은 술은 없음. 개봉 후에는 빨리 먹기.
          <br />
          <br />
          3. 과실주: 쌀 대신 과일을 발효한 술. 대표적으로 와인이 과실주에 해당됨. 달달하고 과일맛이 나는 경우가 많음.
          10도 내외의 도수가 대부분.
          <br />
          <br />
          4. 소주: 쌀을 발효한 뒤 증류해서 만든 술. 20도 이상의 높은 도수 증류해서 알콜만 모았으니, 증류주끼리의 원재료
          맛이 약해져 입문자는 구분하기 어려움.
          <br />
          <br />
          5. 리큐르: 증류주 치고는 낮은 도수, 증류주에 부재료를 가미해 특징적인 맛이 두드러짐.
        </div>
      </div>
    </div>
  );
};

export default KoreanGuide;
