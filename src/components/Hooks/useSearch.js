import { useSearchParams } from "react-router-dom"

const useSearch = () => {

//Search function
const [searchParams, setSearchParams] = useSearchParams();

const searchItem = (e) => {
  const banner = document.getElementById("banner");
  banner.style.display = "none";
  setSearchParams({ filter : e.target.value })
}

const filter = searchParams.get("filter") || "";

return { filter, searchItem };
}

export default useSearch