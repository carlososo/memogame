import React, { useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ cardIcon,isPair }) => {
  const [flipped, setFlipped] = useState(false);
  
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  const clicked =()=>{
    isPair(ref1.current.children[0].className)
    setFlipped(!flipped);
  }
  
  return (
    <ReactCardFlip ref={ref2} isFlipped={flipped} flipDirection="horizontal">
      <div  onClick={()=>clicked()} className="__card">X</div>
      <div ref={ref1} onClick={()=>clicked()} className="__card">
        <i className={`fa ${cardIcon}`}></i>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
