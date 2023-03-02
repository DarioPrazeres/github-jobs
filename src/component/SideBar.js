import React, { useContext } from "react";
import { DataContext } from "../App";
import iconWorld from "../img/world.png"
function SideBar() {
    const {status, setStatus} = useContext(DataContext);
    return (
        <aside className="sidebar">
            <div className="form-div" >
                <input type="checkbox" className="check" onChange={(e)=>{
                    setStatus(e.target.checked)
                    console.log(status)
                    }} />
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
    const {city, setCity} = useContext(DataContext);
    return(
        <label className="container" onClick={()=>{
            setCity(props.city);
            console.log(city);
        }}>
            <input type="checkbox" checked={props.city === city ? true : false} />
            <span className="checkmark"></span>
            {props.city}
        </label>
    )
}
export default SideBar;