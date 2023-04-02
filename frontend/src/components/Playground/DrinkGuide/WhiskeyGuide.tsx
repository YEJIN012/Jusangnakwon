import styles from "@/components/Playground/DrinkGuide/WhiskeyGuide.module.css";
import ontherock from "/assets/ontherock.png";
import glan from "/assets/glan.png";

const WhiskeyGuide = () => {
  return (
    <div className={`${styles[`container`]}`}>
      <h1 className={`${styles[`drinktype`]}`}> WHISKEY</h1>
      <div className={`${styles[`content-wrap`]}`}>
        <h3 className={`${styles[`small-title`]}`}>🥃 위스키의 맛과 향&nbsp;</h3>
        <div>스모키 / 과실향 / 바닐라향 세가지 향으로 구분된다.</div>
        <div>
          <h3 className={`${styles[`small-title`]}`}>🥃 향 별 특징 및 입문자를 위한 위스키 추천&nbsp;</h3>
          <h3 className={`${styles[`whiskey-taste`]}`}>🌈 스모키</h3>
          <div>
            🔹 훈제 향, 오크 나무를 태우는 듯한 향 <br />
            🔹 입문용 추천 술 <br />
            &nbsp; &nbsp;&nbsp; &nbsp;1. 조니워커 레드
            <p className={`${styles[`drink-info-text`]}`}>
              {" "}
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;-이마트 트레이더스에서 2만원대 구입가능
            </p>
            &nbsp; &nbsp;&nbsp; &nbsp;2. 조니워커 블랙
            <br />
            <p className={`${styles[`drink-info-text`]}`}>
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;-4~5만원 가격대
              <br />
              <br />
            </p>
          </div>
          <h3 className={`${styles[`whiskey-taste`]}`}>🌈 과실향</h3>
          🔹 프루티, 과일향, 잼 향, 부드러운 목넘김이 특징
          <br />
          🔹 입문용 추천 술 <br />
          <div>
            &nbsp; &nbsp;&nbsp; &nbsp;1. 제임슨 <br />
            &nbsp; &nbsp;&nbsp; &nbsp;2. 페이머스 그라우스
            <br />
            <p className={`${styles[`drink-info-text`]}`}>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;- 하이볼로 먹기 좋음</p>
            &nbsp; &nbsp;&nbsp; &nbsp;3. 몽키숄더, 네이키드 몰트 시바스리갈
            <br />
            &nbsp; &nbsp;&nbsp; &nbsp;4. 발렌타인 12/17년 <br />
            <br />
            <h3 className={`${styles[`whiskey-taste`]}`}>🌈 바닐라향</h3>
            🔹 버번계열, 바닐라, 가죽, 초콜릿, 메니큐어 향 <br />
            🔹 입문용 추천 술 <br />
            <div>
              &nbsp; &nbsp;&nbsp; &nbsp;1. 에반윌리엄스
              <br />
              <p className={`${styles[`drink-info-text`]}`}>
                &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;- 이마트 트레이더스에서 1L에 3만 원초반대
                <br />
                &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;- 향도 좋고 맛도 괜찮아서 가성비 끝판왕이라는 별명
              </p>
              &nbsp; &nbsp;&nbsp; &nbsp;2. 버번 3대장
              <p className={`${styles[`drink-info-text`]}`}>
                &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;- 메이커스마크, 와일드터키, 버팔로트레이스
              </p>
              &nbsp; &nbsp;&nbsp; &nbsp;3. 잭다니엘
              <br />
            </div>
          </div>
        </div>

        <h3 className={`${styles[`small-title`]}`}>🥃 위스키 본연의 맛을 느끼며 먹는 법&nbsp;</h3>
        <div>
          🌈 위스키를 시원하고 빠르게 마시려면 온더락 잔에,
          <br />
          위스키 본연의 향과 맛을 좋아한다면 글렌케런잔에!
          <div className={`${styles[`glass-img-wrap`]}`}>
            <div className={`${styles[`ontherock`]}`}>
              <img src={ontherock} className={`${styles[`glass-img`]}`} />
              <p>온더락</p>
            </div>
            <div className={`${styles[`glan`]}`}>
              <img src={glan} className={`${styles[`glass-img`]}`} />
              <p>글렌케런</p>
            </div>
          </div>
          <br />
          <p>
            ※ 글렌케런잔은 배가 볼록하게 튀어나와있어 향을 모여있게끔 해주기 때문에 향과 맛을 제대로 느끼기 좋습니다.
          </p>
          <br />
          <br />
          🌈 위스키는 '술을 먹는다'가 아니라 '향을 먹는다'는 말이 있을 정도로 향이 중요!
          <p className={`${styles[`whisky-master-text`]}`}>
            🔹 한 잔 먹을 때 30ml정도 따라먹기.
            <br />
            🔹 한 입 먹기 전에 잔에 코를 박고 향 느껴주기.
            <br />
            🔹 한 입 먹을 때는 입술에 살짝 묻혀주며 아주 적은 양 먼저 한 입 먹어보기.
            <br />
            🔹 한번에 삼키기 보다는 입 안을 전체적으로 헹군다는 느낌으로 향을 퍼뜨리며 입을 적응시켜주기.
            <br />
            🔹 이 방법을 통해 위스키의 본연의 향과 맛을 더 잘 즐길 수 있습니다.
          </p>
        </div>

        {/* <h3 className={`${styles[`small-title`]}`}>🥃 위스키의 종류 알기&nbsp;</h3>
        <div>
          위스키를 크게 나누자면,
          <br />
          싱글몰트, 블랜디드, 버번, 럼, 꼬냑 등으로 나눌 수 있습니다.
          <br /> 싱글몰트와 블랜디드는 전체적인 틀을 이야기 하는 것이고,
          <br />
          어떤 종류의 오크통에서 숙성 시켰는지에 따라
          <br />
          맛과 부르는 명칭이 달라집니다.
          <br />
          <br />
          싱글몰트는 한 증류소에서 생산한 100% 보리로 만든 위스키, 블랜디드는 다양한 원액을 섞어 풍부한 맛을 내는
          위스키, 미국 영화에서 자주 등장하는 버번은 미국에서 증류한 위스키, 럼은 사탕수수로 제작한 위스키, 꼬냑은
          블랜디드 위스키 안에 들어 있는 하나의 종류로써 다른 종류의 위스키와는 다르게 원료가 포도인 과실주 입니다.
        </div> */}
      </div>
    </div>
  );
};

export default WhiskeyGuide;
