import styles from "@/components/Home/Banner/DrinkBtiBanner.module.css";

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

export default function DrinkBtiBanner() {
  return (
    <div className={`${styles[`container`]}`}>
      <p>간단한 테스트를 통해<br/>나를 표현한 술을 알아보세요!</p>
      <h1>술BTI</h1>
    </div>
  );
}
