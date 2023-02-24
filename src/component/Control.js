import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import leftIcon from "../img/left.png";
import rightIcon from "../img/right.png";
function Control() {
    const { data, number } = useContext(DataContext);
    var count = 0;
    console.log("FIRST NUMBER", number)
    return (
        <div className="control">
            <Seta seta={leftIcon} side="left" />
            {
                data && data.jobs.map((item, index) => {
                    if (index < 10) {
                        if (index === 0) {
                            return <Position sp='active' number={index + 1} key={index + 1} />
                        } else {
                            return <Position number={index + 1} key={index + 1} />
                        }
                    }

                })
            }
            <Seta seta={rightIcon} side="right" />
        </div>
    );
}
function Position(props) {
    return (
        <div className={`seta ${props.sp}`} id={props.number}>
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
    if (side === 'right' && number >= 1 && number < 11) {
        update = number + 1;
        document.getElementById(update + 1).classList.remove('active');
        document.getElementById(update - 1).classList.remove('active');
        document.getElementById(update).classList.add('active');
    } else if (side === 'left' && number > 1) {
        update = number - 1;
        document.getElementById(update + 1).classList.remove('active');
        document.getElementById(update).classList.add('active');
    }

    return update;
}
export default Control;