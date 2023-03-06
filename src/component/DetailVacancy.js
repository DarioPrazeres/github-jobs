import React from "react";
import { useContext } from "react";
import { IdContext } from "..";
const DetailVacancy = (props) => {
    const { setIdElement, IdElement} = useContext(IdContext);
    console.log(IdElement)
    return (
        <section>
            <h1>DetailVacancy Here</h1>
            <p>{IdElement}</p>
        </section>
    )
};
  
export default DetailVacancy;