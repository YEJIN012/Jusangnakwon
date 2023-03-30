import axios from "axios";
import { useState, useEffect } from "react";
import { apiSearchDrink } from "@/api/home";

interface Content {
  id: number;
  name: string;
  liquorType: string;
}

interface Data {
  content: Content[];
  curPageNumber: number;
  totalPage: number;
}

const SearchPage = () => {
  const [searchedData, setSearchedData] = useState<Data | null>();

  apiSearchDrink('1').then((r) => {
    // console.log(r);
    setSearchedData(r?.data.body);
  });
  return (
    <div style={{ padding: "50%" }}>
      {searchedData &&
        searchedData.content &&
        searchedData.content.map((item: Content) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.liquorType}</p>
          </div>
        ))}
    </div>
  );
};
export default SearchPage;
