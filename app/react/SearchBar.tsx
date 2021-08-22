import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";
const styles = `
  .search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 1px solid #32ff7e;
  border-top: none;
  border-right: none;
  border-left: none;
  padding: 5px;
  height: 2.2rem;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: white;
  margin-bottom: 90px;
  background-color: transparent;
}

.searchTerm:focus{
  color: #32ff7e";
  
}

.searchButton {
  width: 40px;
  height: 35px;
  border: 1px solid #32ff7e;
  background: transparent;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
.searchButton:hover{
    background: #FF6F00;
} 

.wrap {
  width: 30%;
  height: 34px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} 
  `;
export default function SearchBar() {
  return (
    <div className="wrap">
      <div className="search">
        <input type="text" className="searchTerm" placeholder="Buscar" />
        <button type="submit" className="searchButton">
          <SearchIcon />
        </button>
      </div>
      <style>{styles}</style>
    </div>
  );
}
