import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import leftIcon from "../img/left.png";
import rightIcon from "../img/right.png";
import moreIcon from '../img/more.png';
const imgMore = document.createElement('img');
imgMore.src = moreIcon;
function Control() {
    const { data, number } = useContext(DataContext);
    console.log("FIRST NUMBER", number)
    return (
        <div className="control">
            <Seta seta={leftIcon} side="left" />
            {
                data && data.jobs.map((item, index) => {
                    if(index < 10){
                        if(index<3 || index>=8){
                            if(index===0){
                                return <Position name='seta-0 active' number={index + 1} key={index + 1} />
                            }
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
    const { setNumber, number } = useContext(DataContext);
    return (
        <div className={props.name || 'seta-1'} id={props.number} onClick={()=>{
            setNumber((c)=> c = props.number);
            console.log(number);
            
            removeActive(number);
            elementsNear(props.number);
            document.getElementById(props.number).classList.add("active");
  
        }}>
            {(props.number===9?<MoreIcon/>:props.number)}
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
function MoreIcon(){
    return(
        <img src={moreIcon} alt="more icon" />
    )
}
function removeActive(id){
    for (var count = 1; count <= 10; count++) {
        console.log(count)
        if (document.getElementById(count).classList.contains("active")) {
            document.getElementById(count).classList.remove('active');
        }
    }
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
    document.getElementById('9').style.display = "flex";
    document.getElementById('10').style.display = "flex";
    document.getElementById('9').style.border = 'none';
    if(current>7){
        document.getElementById('1').style.display = "flex";
        document.getElementById('2').style.display = "flex";
        document.getElementById('2').innerHTML = '';
        document.getElementById('2').appendChild(imgMore);
        document.getElementById('9').style.border = '1px solid #B7BCCE';
        document.getElementById('9').innerHTML = '9';
    }else{
        document.getElementById('9').innerHTML = '';
        document.getElementById('2').innerHTML = '2';
        document.getElementById('9').style.border = 'none';
        document.getElementById('9').appendChild(imgMore);
    }
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