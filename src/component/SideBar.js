import React from "react";
import iconWorld from "../img/world.png"
function SideBar() {
    return (
        <aside className="sidebar">
            <div className="form-div">
                <input type="checkbox" className="check" />
                <label>Full Time</label>
            </div>
            <h3>Location</h3>
            <div className="form-city">
                <img src={iconWorld} alt="world Icon" className="worldIcon"/>
                <input type="text"placeholder="City, state, zip code or country" className="input-City" />
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
function City(props){
    return(
        <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            {props.city}
        </label>
    )
}
export default SideBar;