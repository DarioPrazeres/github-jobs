import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import leftIcon from "../img/left.png";
import rightIcon from "../img/right.png";
function Control() {
    const { data, number } = useContext(DataContext);
    console.log("FIRST NUMBER", number)
    return (
        <div className="control">
            <Seta seta={leftIcon} side="left" />
            {
                data && data.jobs.map((item, index) => {
                    if(index < 10){
                        if(index<3 || index===9){
                            return <Position name='seta-0' number={index + 1} key={index + 1} />
                        }
                        return <Position number={index + 1} key={index + 1} />
                    }
                    
                })
            }
            <Seta seta={rightIcon} side="right" />
        </div>
    );
}
function Position(props) {
    return (
        <div className={props.name || 'seta-1'} id={props.number}>
            {props.number}
        </div>
    )
}
function Seta(props) {
    const { number, setNumber } = useContext(DataContext);
    console.log("UPDATE NUMBER", number)
    return (
        <div className='seta' onClick={() => {
            setNumber(updateSeta(props.side, number))
        }}>
            <img src={props.seta} alt="seta" />
        </div>
    )

}
function updateSeta(side, number) {
    console.log("NUMBER", number);
    console.log("SIDE", side)
    var update = number;
    document.getElementById(number).classList.remove('active');
    if (side === 'right' && number >= 1 && number < 10) {
        update = number + 1;
    } else if (side === 'left' && number > 1) {
        update = number - 1;
    }
    document.getElementById(update).classList.add('active');
    elementsNear(update)
    return update;
}
function elementsNear(current) {
    var position1, position2;
    if (current < 3) {
        current = 1;
        position1 = current + 1;
        position2 = current + 2;
    } else if (current > 7) {
        current = 8;
        position1 = current + 1;
        position2 = current + 2;
    } else {
        position1 = current - 1;
        position2 = current + 1;
    }
    hiddenButton(current, position1, position2);
    document.getElementById(position1).style.display = "flex";
    document.getElementById(current).style.display = "flex";
    document.getElementById(position2).style.display = "flex";
    document.getElementById('10').style.display = "flex";
}
function hiddenButton(current, position1, position2) {
    for (var count = 1; count <= 10; count++) {
        console.log(count)
        if (count !== current || position1 !== count || count !== position2) {
            document.getElementById(count).style.display = "none";
        }
    }
}
export default Control;