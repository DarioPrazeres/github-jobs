import React from "react";

const DetailVacancy = (props) => {
    console.log(props.length)
    return (
        <section>
            <h1>DetailVacancy Here</h1>
            <p>{props.length}</p>
        </section>
    )
};
  
export default DetailVacancy;