// import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "@mui/icons-material/Search";

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
  TRADITION: string;
  COCKTAIL: string;
  HOMETENDER: string;
}

const SearchItem = (props: Props | null) => {
  const drinkType: DrinkTypes = {
    WINE: "l1",
    WHISKY: "l2",
    TRADITION: "l3",
    COCKTAIL: "l4",
    HOMETENDER: "l5",
  };

  return (
    <div>
      <Link to={`../details/${drinkType[props?.content.liquorType as keyof DrinkTypes]}/${props?.content.id}`}>
        <div
          style={{
            color: "white",
            display: "flex",
            textAlign: "center",
            borderBottom: "0.5px solid gray",
            padding: "4%",
          }}
        >
          <Search style={{ marginRight: "3%" }}></Search>
          {props?.content.name}
        </div>
      </Link>
      {/* <div>{props?.searchedData.curPageNumber}</div> */}
      {/* <div>{props?.searchedData.totalPage}</div> */}
    </div>
  );
};

export default SearchItem;
