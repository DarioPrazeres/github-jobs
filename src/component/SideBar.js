import React from "react";
function SideBar() {
    return (
        <aside className="sidebar">
            <div className="form-div">
                <input type="checkbox" className="check" />
                <label>Full Time</label>
            </div>
            <h3>Location</h3>
            <div className="form-city">
                <img src="" alt="world Icon" className="worldIcon"/>
                <input type="text"placeholder="City, state, zip code or country" />
            </div>
            <div className="listCities">
                <City/>
                <City/>
            </div>
        </aside>
    );
}
function City(){
    return(
        <div>
            <input type="checkbox" />
            <label>London</label>
        </div>
    )
}
export default SideBar;