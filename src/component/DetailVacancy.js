import React from "react";
import { daysAgo } from "./WorkList";
import { DataContext } from "../App";
import { useContext, useState } from "react";
import clockIcon from "../img/clock.png";
import worldIcon from "../img/world.png";
//id:1609007
const DetailVacancy = () => {
    const { data, idItem, setId } = useContext(DataContext);
    return (
        <section id="dt">
            dad
            {
                data && data.jobs.map((item) => {
                    if (item.id === idItem) {
                        console.log('Entrei', item.id)
                        return (
                            <div id="detail">
                                ad
                                <div className="detail-Vacancy">
                                    <Bar url={item.url} />
                                    <div className="detail-boby">
                                        <HeaderDetail namePosition={item.title} status={item.job_type} />
                                        <DataInfo day={daysAgo(item.publication_date)} />
                                        <EmpDetail nameEnterprise={item.company_name}
                                            logo={item.company_logo}
                                            cityName={item.candidate_required_location || 'WorldWide'
                                            } />
                                        {
                                            data && data.jobs.map((item) => {
                                                if (item.id === idItem) {
                                                    return (
                                                        <div id="description">
                                                            {`${DOMParser().parseFromString(item.description, "text/xml").innerHTML}`}
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                <div>dad</div>
                            </div>
                        )
                    }
                })
            }

        </section>
    )
};
function EmpDetail(props) {
    return (
        <div className="emp">
            <img src={props.logo} className="logoEnter" alt="logo enterprise" />
            <div className="text">
                <h3>{props.nameEnterprise}</h3>
                <div className="data-info">
                    <img src={worldIcon} alt="world icon" />
                    <p>{props.cityName}</p>
                </div>
            </div>
        </div>
    )
}
function Bar(props) {
    return (
        <div className="bar">
            <button className="btnBack">Back To Search</button>
            <h4 className="apply">HOW TO APPLY</h4>
            <a href={props.url} className="applyLink">Please Click Here with you apply this position</a>
        </div>
    )
}
function HeaderDetail(props) {
    return (
        <div className="headerDetail">
            <h1 className="hd">{props.namePosition}</h1>
            <div className="statusName">{props.status}</div>
        </div>
    )
}
function DataInfo(props) {
    return (
        <div className="data-info">
            <img src={clockIcon} alt="icon clock" />
            <p> {props.day} days ago</p>
        </div>
    )
}
function Discription(props) {
    document.getElementById('description').innerHTML = props.desc;
    document.getElementById('description').style.display = 'block';
    return (
        <div>
            <div id="description">
                
            </div>
        </div>
    )
}

export default DetailVacancy;