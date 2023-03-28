import axios from "axios";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const apiSearchDrink = async () => {
      const response = await axios.get(`https://0dec3265-a4d1-4697-a3b9-00c72b5942bc.mock.pstmn.io/api/search/lee/1`);
      setSearchedData(response.data.body);
    };
    apiSearchDrink();
  }, []);

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
