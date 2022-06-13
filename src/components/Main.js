import React from "react";
import { CountryList } from "./CountryList";
function Main(props){
    return(
        <main>
            <CountryList data={props.data}/>
        </main>
    )
}

export default Main;