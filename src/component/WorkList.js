import React from "react";
import Vacancy from "./Vacancy";
import { useContext } from "react";
import { DataContext } from "../App";
function WorkList() {
    var cont=0;   
    const { data, number, status } = useContext(DataContext);
    var length = lengthArray(data)
    console.log('LENGTH FUL time', length);
    return (
        <div className="worklist">
            {data &&
                data.jobs.map((item, index) => {
                    if (status === true && item.job_type === 'full_time') {
                        cont++;
                        console.log(cont)
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
                    } else {
                        if ((number - 1) * 5 <= index && (number * 5) > index) {
                            console.log(index)
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
                    }
                })}
        </div>
    );
}
function lengthArray(data){
    var cont = 0;
    data &&
    data.jobs.map((item, index) =>{
        if (item.job_type === 'full_time') {
            cont++
        }
    } )
    return cont;
}
function daysAgo(data) {
    var info = String(data);
    info.split('-');
    return `${info[8]}${info[9]}`;
}
export default WorkList;