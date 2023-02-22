import React from "react";
import clockIcon from "../img/clock.png";
import worldIcon from "../img/world.png"
function Vacancy(){
    return(
        <div className="vacancy">
            <img src="" className="logoEnter" alt="logo enterprise"/>
            <div className="disc">
                <h4 className="nameEnter">Enterprise</h4>
                <h2 className="positionName">Name position</h2>
                <div className="statusName">Status</div>
            </div>
            <div className="data">
                <div className="data-info">
                    <img src={worldIcon} alt="world icon" /> 
                    <p>City</p>
                </div>
                <div className="data-info">
                    <img src={clockIcon} alt="icon clock" />
                    <p>days ago</p>
                </div>
            </div>
        </div>
    );
}

export default Vacancy;