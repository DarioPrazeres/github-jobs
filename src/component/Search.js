import React from "react";

function Search(){
    return(
        <section className="search">
            <div>
                <img className="iconBag"/>
                <input placeholder="Title, Companies, expertise or benefits" />
                <button className="btn-search">Search</button>
            </div>
        </section>
    );
}
export default Search;