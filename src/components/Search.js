import React from "react";
import "./Layout.css";

function Search(props) {
  return (
    <>
      <input
        onChange={props.change}
        className="searchinput"
        type="text"
        placeholder="Type to search"
      ></input>
      <button className="btn" onClick={props.click}>
        search
      </button>
    </>
  );
}

export default Search;
