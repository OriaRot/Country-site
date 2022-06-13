import React, { useContext, useEffect, useState } from 'react'
import { CountryCnt } from '../Context/countryCnt'
import "./popup.css"

export default function PopUp(props) {
const clickInfo = useContext(CountryCnt)
const lang = Object.values(clickInfo[0].languages)
useEffect(()=>{console.log(lang)},[])
useEffect(()=>{console.log(clickInfo)},[])

    return (
        <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.close} >x</span>
        {clickInfo.map(v=>{return(
          <>
        <header>
              <img src={v.flags.svg} alt='flag'/>
          </header>
          
          <span style={{fontSize: "40px"}}>______________</span>
          
          <div className='popul'>
          <label><b>population:</b></label><br/>
          <h3>{v.population}</h3>
          </div>
          <main>
          <label><b>languages:</b></label><br/>
          <ul>  {lang.map(i=><li>{i}</li>)}  </ul>
          </main>
          </>
          )})}
      </div>
    </div>
    )
  }


  


{/* <header>
<h2>condff</h2>
</header>
<br/>
<span>:</span>
<br/>
<label>population:</label><br/>
<h3>12243657869</h3>
<main>

<h4>hygfy: kmhbhjgh lml;k:jnbjbj</h4>
</main> */}