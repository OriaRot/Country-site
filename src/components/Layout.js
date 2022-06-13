import React from "react";
import "./Layout.css";
import Header from "./Header";
function Layout(props) {
  return (
    <div>
      <Header data={props.data} click={props.click} change={props.change} cnt={props.cnt}/>
    </div>
  );
}

export default Layout;
