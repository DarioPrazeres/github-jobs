import React from "react";
import Vacancy from "./Vacancy";
import { useContext } from "react";
import { DataContext } from "../App";
function WorkList() {
    const { data, number, status } = useContext(DataContext);
    //console.log(data)
    return (
        <div className="worklist">
            {data &&
                data.jobs.map((item, index) => {
                    if((number-1)*5 <= index && (number*5) > index){
                        console.log(index)
                        return (<Vacancy
                        key={item.id}
                        nameEnterprise={item.company_name}
                        logo={item.company_logo}
                        namePosition={item.title}
                        status={item.job_type||'NOT FOUND'}
                        cityName={item.candidate_required_location||'WorldWide'
                        }
                        day={daysAgo(item.publication_date)}
                    />);
                    }
                })}
        </div>
    );
}
function daysAgo(data){
    var info = String(data);
    info.split('-');
    return `${info[8]}${info[9]}`;
}
export default WorkList;