import React from "react";
import Vacancy from "./Vacancy";
import { useContext } from "react";
import { DataContext } from "../App";
function WorkList(){
    const {data} = useContext(DataContext);
    console.log(data); 
    return(
        <div className="worklist">
            <Vacancy/>
        </div>
    );
}
export default WorkList;