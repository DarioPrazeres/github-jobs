import React from "react";
import Parser from "html-react-parser";
import { daysAgo } from "./WorkList";
import { DataContext } from "../App";
import { useContext } from "react";
import clockIcon from "../img/clock.png";
import worldIcon from "../img/world.png";
//id:1609007
const DetailVacancy = () => {
    const { data, idItem} = useContext(DataContext);
    return (
        <section id="dt">
            {
                data && data.jobs.map((item) => {
                    if (item.id === idItem) {
                        console.log('Entrei', item.id)
                        return (
                            <div id="detail" key={item.id+1}>
                                <div className="detail-Vacancy">
                                    <Bar url={item.url} />
                                    <div className="detail-boby">
                                        <HeaderDetail namePosition={item.title} status={item.job_type} />
                                        <DataInfo day={daysAgo(item.publication_date)} />
                                        <EmpDetail nameEnterprise={item.company_name}
                                            logo={item.company_logo}
                                            cityName={item.candidate_required_location || 'WorldWide'
                                            } />
                                        <div id="description">
                                            {
                                                Parser(item.description)
                                            }       
                                       </div>
                                    </div>
                                </div>
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
            <button className="btnBack" onClick={()=>{
                document.getElementById('dt').style.display = 'none';
                document.getElementById('body').style.display = 'block'
            }}>Back To Search</button>
            <h4 className="apply">HOW TO APPLY</h4>
            <a href={props.url} className="applyLink">Apply Here</a>
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
export default DetailVacancy;