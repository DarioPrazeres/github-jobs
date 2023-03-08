import React, { useContext, useState } from "react";
import workIcon from "../img/suitcase.png"
import { DataContext } from "../App";

function Search(){
    const {category, setCategory} = useContext(DataContext);
    const [input, setInput] = useState('');
    return(
        <section className="search" id="idea">
            <div className="formSearch">
                <img className="iconBag" src={workIcon} alt="Suit case" />
                <input placeholder="Frontend, Backend or Fullstack" className="inputSearch" value={input || ''} onChange={(e)=>{
                    setInput(e.target.value);
                }} />
                <button className="btn-search" onClick={()=>{
                    if(input < 3){
                        alert('insert real information');
                    }else{
                        setCategory(input);
                        console.log(category)
                    }
                }}>Search</button>
            </div>
        </section>
    );
}
export default Search;