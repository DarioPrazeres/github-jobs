import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import iconWorld from "../img/world.png"
import iconSearch from "../img/search.png"
function SideBar() {
    const [input, setInput] = useState('')
    var countries;
    const { status, setStatus, setCountry, country, data } = useContext(DataContext);
    return (
        <aside className="sidebar">
            <div className="form-div" >
                <input type="checkbox" className="check" onChange={(e) => {
                    setStatus(e.target.checked)
                    console.log(status)
                }} />
                <label>Full Time</label>
            </div>
            <h3>Location</h3>
            <div className="form-city">
                <img src={iconWorld} alt="world Icon" className="worldIcon" />
                <input type="text" placeholder="City, state, zip code or country" className="input-City" value={input || ""} onChange={(e) => {
                    setInput(e.target.value)
                }} />
                <button className="mini-search" onClick={(e) => {
                    if(input.length < 2){
                        alert('insert something!')
                    }else{
                        setCountry(input)
                    }                    
                }}>
                </button>
            </div>
            <div className="listCities">
                <City country="UK"  />
                <City country="USA" />
                <City country="Canada" />
                <City country="Germany" />
            </div>
        </aside>
    );
}
function City(props) {
    const { country, setCountry} = useContext(DataContext);
    return (
        <label className="container" >
            <input type="checkbox" checked={props.country === country ? true : false} onChange={(e) => {
                    console.log(e.target.checked);
                    if(e.target.checked){
                        setCountry(props.country)
                    }
                }} />
            <span className="checkmark"></span>
            {props.country}
        </label>
    )
}
export default SideBar;