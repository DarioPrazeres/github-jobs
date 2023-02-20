import React from "react";
import workIcon from "../img/suitcase.png"
function Search(){
    return(
        <section className="search">
            <div className="formSearch">
                <img className="iconBag" src={workIcon} alt="Suit case" />
                <input placeholder="Title, Companies, expertise or benefits" className="inputSearch" />
                <button className="btn-search">Search</button>
            </div>
        </section>
    );
}
export default Search;