import styles from "@/components/Home/Banner/WeatherBanner.module.css";

const dummyList = [
  {
    id: 1,
    name: "햄버거공주",
    ratings: 4,
    date: "2023.12.23",
    img: "https://picsum.photos/300/300/?random",
    explan: "드디어 먹어봄 진짜 레전드 존맛탱 담주에 또 해먹어야지~",
  },
  // {
  //   id: 2,
  //   name: "한강보내주",
  //   ratings: 1,
  //   date: "2023.12.23",
  //   img: "https://picsum.photos/300/300/?random",
  //   explan: "윽 별로",
  // },
  // {
  //   id: 3,
  //   name: "자전거태워주",
  //   ratings: 3,
  //   date: "2023.12.23",
  //   img: "https://picsum.photos/300/300/?random",
  //   explan: "드디어 먹어봄 진짜 레전드 존맛탱 담주에 또 해먹어야지~",
  // },
];

export default function WeatherBanner() {
  return (
    <div className={`${styles[`container`]}`}>
      <h3>오늘같은 날씨엔..</h3>
      <p>파전에 막걸리 한 잔 어떠세요?</p>
    </div>
  );
}
