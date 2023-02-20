import React from "react";
import SideBar from "./SideBar";
import WorkList from "./WorkList";
function Work(){
    return (
        <section className="workBody">
            <SideBar/>
            <WorkList/>
        </section>
    )
}
export default Work;