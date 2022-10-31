import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

function Search() {

    const [keyword, setKeyword] = useState("");
    let navigate = useNavigate()

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
    
      navigate(`/products/${keyword}`);
    
      
    } else {
      navigate("/products");
    }
  };

  return (
      <>
    <form className="search" onSubmit={searchSubmitHandler}>
        <input type="text" placeholder="Search for products...." onChange={(e) => setKeyword(e.target.value)}/>
        <button type="submit">
        <SearchIcon fontSize="large" className="search__icon" style={{color:"black"}}/>
        </button>  
    </form>
    </>
  )
}

export default Search