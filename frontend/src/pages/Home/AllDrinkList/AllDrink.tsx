import styles from "@/pages/Home/AllDrinkList/AllDrink.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";



// const { search } = useLocation();
// const searchParams = new URLSearchParams(search);
// const initialSelectedButton = searchParams.get("selectedButton") || "cocktail";
// const [selectedButton, setSelectedButton] = useState<string>(initialSelectedButton);

const AllDrink = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [selectedButton, setSelectedButton] = useState<string | null>("cocktail");
  // const [selectedButton, setSelectedButton] = useState<string | null>(location.pathname.split("/")[2] || "cocktail");
  const tabNumber =
    location.pathname === "/drinklist/cocktail"
      ? 1
      : location.pathname === "/drinklist/whiskey"
      ? 2
      : location.pathname === "/drinklist/wine"
      ? 3
      : location.pathname === "/drinklist/korean"
      ? 4
      : 5;

  const dummyList = [
    {
      id: 1,
      img: "https://picsum.photos/300/300/?random",
      name: "콥케",
      drinktype: "l6",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/300/?random",
      name: "샌드맨",
      drinktype: "l6",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/300/?random",
      name: "맛있는와인",
      drinktype: "l6",
    },
    {
      id: 4,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
      drinktype: "l6",
    },
    {
      id: 5,
      img: "https://picsum.photos/300/300/?random",
      name: "새콤한와인",
      drinktype: "l6",
    },
    {
      id: 6,
      img: "https://picsum.photos/300/300/?random",
      name: "시큼한와인",
      drinktype: "l6",
    },
    {
      id: 7,
      img: "https://picsum.photos/300/300/?random",
      name: "매콤한와인",
      drinktype: "l6",
    },
    {
      id: 8,
      img: "https://picsum.photos/300/300/?random",
      name: "씁쓸한와인",
      drinktype: "l6",
    },
    {
      id: 9,
      img: "https://picsum.photos/300/300/?random",
      name: "텁텁한와인",
      drinktype: "l6",
    },
    {
      id: 10,
      img: "https://picsum.photos/300/300/?random",
      name: "짭짤한와인",
      drinktype: "l6",
    },
    {
      id: 11,
      img: "https://picsum.photos/300/300/?random",
      name: "밋밋한와인",
      drinktype: "l6",
    },
    {
      id: 12,
      img: "https://picsum.photos/300/300/?random",
      name: "느끼한와인",
      drinktype: "l6",
    },
  ];

  return (
    <div className={`${styles["container"]}`}>
      {tabNumber === 1 && (
        <div>
          <h3>칵테일</h3>
          <Link to={`/playground/guide?selectedButton=cocktail`} 
          // onClick={() => setSelectedButton("cocktail")}
          >
            <span>칵테일 입문가이드 바로가기 ▶ </span>
          </Link>
          <div className={`${styles["drink-list"]}`}>
            {dummyList.map((wine) => (
              <div key={wine.id} className={`${styles["drink-list-item"]}`}>
                <div className={`${styles["item-wrap"]}`}>
                  <img
                    src={wine.img}
                    style={{ maxWidth: "100%", height: "auto" }}
                    onClick={() => navigate(`/details/${wine.drinktype}/${wine.id}`)}
                  ></img>
                  {/* <p className={`${styles["drink-name"]}`}>{wine.name}</p> */}
                  <div className={styles["drink-label-wrap"]}>
                    <p className={`${styles["drink-name"]}`}>{wine.name}</p>
                    <BookmarkBorder fontSize="small" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {tabNumber === 2 && (
        <div>
          <h3>위스키</h3>
          <Link to={`/playground/guide?selectedButton=whiskey`}>
            <span>위스키 입문가이드 바로가기 ▶ </span>
          </Link>
          <div className={`${styles["drink-list"]}`}>
            {dummyList.map((wine) => (
              <div key={wine.id} className={`${styles["drink-list-item"]}`}>
                <div className={`${styles["item-wrap"]}`}>
                  <img
                    src={wine.img}
                    style={{ maxWidth: "100%", height: "auto" }}
                    onClick={() => navigate(`/details/${wine.drinktype}/${wine.id}`)}
                  ></img>
                  {/* <p className={`${styles["drink-name"]}`}>{wine.name}</p> */}
                  <div className={styles["drink-label-wrap"]}>
                    <p className={`${styles["drink-name"]}`}>{wine.name}</p>
                    <BookmarkBorder fontSize="small" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {tabNumber === 3 && (
        <div>
          <h3>와인</h3>
          <Link to={`/playground/guide?selectedButton=wine`}>
            <span>와인 입문가이드 바로가기 ▶ </span>
          </Link>
          <div className={`${styles["drink-list"]}`}>
            {dummyList.map((wine) => (
              <div key={wine.id} className={`${styles["drink-list-item"]}`}>
                <div className={`${styles["item-wrap"]}`}>
                  <img
                    src={wine.img}
                    style={{ maxWidth: "100%", height: "auto" }}
                    onClick={() => navigate(`/details/${wine.drinktype}/${wine.id}`)}
                  ></img>
                  {/* <p className={`${styles["drink-name"]}`}>{wine.name}</p> */}
                  <div className={styles["drink-label-wrap"]}>
                    <p className={`${styles["drink-name"]}`}>{wine.name}</p>
                    <BookmarkBorder fontSize="small" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {tabNumber === 4 && (
        <div>
          <h3>전통주</h3>
          <Link to={`/playground/guide?selectedButton=korean`}>
            <span>전통주 입문가이드 바로가기 ▶ </span>
          </Link>
          <div className={`${styles["drink-list"]}`}>
            {dummyList.map((wine) => (
              <div key={wine.id} className={`${styles["drink-list-item"]}`}>
                <div className={`${styles["item-wrap"]}`}>
                  <img
                    src={wine.img}
                    style={{ maxWidth: "100%", height: "auto" }}
                    onClick={() => navigate(`/details/${wine.drinktype}/${wine.id}`)}
                  ></img>
                  {/* <p className={`${styles["drink-name"]}`}>{wine.name}</p> */}
                  <div className={styles["drink-label-wrap"]}>
                    <p className={`${styles["drink-name"]}`}>{wine.name}</p>
                    <BookmarkBorder fontSize="small" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {tabNumber === 5 && (
        <div>
          <h3>맥주</h3>
          <Link to={`/playground/guide?selectedButton=beer`}>
            <span>맥주 입문가이드 바로가기 ▶ </span>
          </Link>
          <div className={`${styles["drink-list"]}`}>
            {dummyList.map((wine) => (
              <div key={wine.id} className={`${styles["drink-list-item"]}`}>
                <div className={`${styles["item-wrap"]}`}>
                  <img
                    src={wine.img}
                    style={{ maxWidth: "100%", height: "auto" }}
                    onClick={() => navigate(`/details/${wine.drinktype}/${wine.id}`)}
                  ></img>
                  {/* <p className={`${styles["drink-name"]}`}>{wine.name}</p> */}
                  <div className={styles["drink-label-wrap"]}>
                    <p className={`${styles["drink-name"]}`}>{wine.name}</p>
                    <BookmarkBorder fontSize="small" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllDrink;
