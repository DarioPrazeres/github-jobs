import React from "react";
import clockIcon from "../img/clock.png";
import worldIcon from "../img/world.png";

function Vacancy(props){
    return(
        <div className="vacancy">
            <a href="/blogs"></a>
            <img src={props.logo} className="logoEnter" alt="logo enterprise"/>
            <div className="disc">
                <h4 className="nameEnter">{props.nameEnterprise}</h4>
                <h2 className="positionName">{props.namePosition}</h2>
                <div className="statusName">{props.status}</div>
            </div>
            <div className="data">
                <div className="data-info">
                    <img src={worldIcon} alt="world icon" /> 
                    <p> {props.cityName}</p>
                </div>
                <div className="data-info">
                    <img src={clockIcon} alt="icon clock" />
                    <p> {props.day} days ago</p>
                </div>
            </div>
        </div>
    );
}

export default Vacancy;