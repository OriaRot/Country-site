import React from "react";
import Search from "./Search";

function Header(props){
return(
    <header>
    <h1 className="headertag">Countries</h1>
    <span className="cnt"><h1>({props.cnt})</h1></span>
    <Search data={props.data} click={props.click} change={props.change}/>
    </header>
)
}

export default Header;