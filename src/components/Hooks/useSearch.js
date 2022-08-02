import { useContext } from "react";
import { searchContext } from "../../context/searchContext";
import { useSearchParams } from "react-router-dom"

const useSearch = () => {

const searchCall = useContext(searchContext);

//Search function
const [searchParams, setSearchParams] = useSearchParams();

const searchItem = (e) => {
  searchCall.setSearchCall(true);
  setSearchParams({ filter : e.target.value })
}

const filter = searchParams.get("filter") || "";

return { filter, searchItem };
}

export default useSearch