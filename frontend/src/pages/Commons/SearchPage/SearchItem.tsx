interface Content {
  id: number | null;
  name: string | null;
  liquorType: string | null;
}

interface Data {
  searchedData: {
    content: Content[] | null;
    curPageNumber: number;
    totalPage: number;
  };
}

const SearchItem = (props: Data | null) => {
  // const { searchedData } = props
  console.log(props?.searchedData);
  return <></>;
};

export default SearchItem;
