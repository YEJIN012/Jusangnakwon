// import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { selectDrinkActions } from "@/slices/selectedDrinkSlice";

// interface Content {
//   id: number;
//   name: string;
//   liquorType: string;
// }

interface Props {
  searchingWord: string;
  content: {
    id: number;
    name: string;
    liquorType: string;
  };
}

interface DrinkTypes {
  WINE: string;
  WHISKY: string;
  BEER: string;
  TRADITION: string;
  COCKTAIL: string;
  HOMETENDER: string;
}

const SearchItem = (props: Props | null) => {
  const isWriting = window.location.pathname.includes("write") ? true : false;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const drinkType: DrinkTypes = {
    WINE: "l1",
    WHISKY: "l2",
    BEER: "l3",
    TRADITION: "l4",
    COCKTAIL: "l5",
    HOMETENDER: "l6",
  };

  return (
    <div>
      {/* <Link to={`../details/${drinkType[props?.content.liquorType as keyof DrinkTypes]}/${props?.content.id}`}> */}
      <div
        style={{
          color: "white",
          display: "flex",
          // textAlign: "center",
          borderBottom: "0.5px solid gray",
          padding: "4%",
        }}
        onClick={() => {
          isWriting
            ? dispatch(selectDrinkActions.selectDrink(props?.content))
            : navigate(`../details/${drinkType[props?.content.liquorType as keyof DrinkTypes]}/${props?.content.id}`);
        }}
      >
        <Search style={{ marginRight: "3%" }}></Search>
        {props?.content.name}
      </div>
      {/* </Link> */}
      {/* <div>{props?.searchedData.curPageNumber}</div> */}
      {/* <div>{props?.searchedData.totalPage}</div> */}
    </div>
  );
};

export default SearchItem;
