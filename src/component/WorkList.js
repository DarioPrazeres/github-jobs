import React from "react";
import Vacancy from "./Vacancy";
import { useContext } from "react";
import { DataContext } from "../App";
function WorkList() {
    const { data, number, status } = useContext(DataContext);
    var length = lengthArray(data, status)
    console.log('LENGTH FUL time', length);
    return (
        <div className="worklist">
            {length.map((item, i) => {
                if ((number - 1) * 5 <= i && (number * 5) > i){
                    return (<Vacancy
                        key={item.id}
                        nameEnterprise={item.company_name}
                        logo={item.company_logo}
                        namePosition={item.title}
                        status={item.job_type || 'NOT FOUND'}
                        cityName={item.candidate_required_location || 'WorldWide'
                        }
                        day={daysAgo(item.publication_date)}
                    />);
                }
            })
            }
        </div>
    );
}
function lengthArray(data, status) {
    var cont = 0;
    var a = []
    if (status === true) {
        data &&
            data.jobs.map((item, index) => {
                if (item.job_type === 'full_time') {
                    a.push(item)
                }
            })
    } else {
        data &&
            data.jobs.map((item, index) => {
                a.push(item)
            })
    }
    return a;
}
function daysAgo(data) {
    var info = String(data);
    info.split('-');
    return `${info[8]}${info[9]}`;
}
export default WorkList;
