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
                <City city="London" />
                <City city="Amesterdam" />
                <City city="New York" />
                <City city="Berlim" />
            </div>
        </aside>
    );
}
function City(props) {
    const { city, setCity } = useContext(DataContext);
    return (
        <label className="container" onClick={() => {
            setCity(props.city);
            console.log(city);
        }}>
            <input type="checkbox" checked={props.city === city ? true : false} />
            <span className="checkmark"></span>
            {props.city}
        </label>
    )
}
function serachForCountry(country, data) {
    var a = []
    data &&
        data.jobs.map((item, index) => {
            if(country === item.candidate_required_location){
                a.push(item)
            }
        })
    return a;
}
export default SideBar;