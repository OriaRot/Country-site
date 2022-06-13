import React from "react";
import Country from "./Country";
export function CountryList(props) {
  

  return (
    <div className="full-list">
      
        <Country data={props.data}/>
     
    </div>
  );
}
