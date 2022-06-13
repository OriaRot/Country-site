import React, { useEffect, useState } from "react";
import "./card.css";
import PopUp from "./PopUp";
import { CountryCnt } from "../Context/countryCnt";

function Country(props) {
  let list = props.data;
  list.map((v, i) => (v.id = i));
  const [isShown, setIsShown] = useState(false);
  const [popData, setPopData] = useState([]);
  const [clickInfo, setClickInfo] = useState();
  const handlePopUp = (e) => {
    setIsShown(!isShown);
  };
  // useEffect(()=>{setPopData([list.filter(item=>item.id===clickInfo)])},[clickInfo])
  useEffect(() => {
    console.log(popData);
  }, [popData]);

  return (
    <div className="country-list">
      {list.map((v, i) => {
        return (
          <div key={i} className="country-card" onClick={()=>{return (
            setClickInfo([v]),
            setIsShown(!isShown)
            )}}>
            <CountryHeader image={v.flags.svg} />
            <CountryContent
              
              name={v.name.common}
              continent={v.continents}
              capital={v.capital}
            />
          </div>
        );
      })}
      <CountryCnt.Provider value={clickInfo}>
        {isShown && <PopUp close={handlePopUp} />}
      </CountryCnt.Provider>
    </div>
  );
}

function CountryHeader(props) {
  return (
    <>
      <img className="card-img" src={props.image} alt={"flag"} />
    </>
  );
}

function CountryContent(props) {
  return (
    <>
      <div className="country-content">
        <span>
          <b className="name">
            {props.name} -{" "}
          </b>
          {props.capital}
        </span>
        <br />
        <b className="continent">
          {props.continent}
        </b>
      </div>
    </>
  );
}

export default Country;
