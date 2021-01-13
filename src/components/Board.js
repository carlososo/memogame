import React from "react";
import deck from "../utils/deck";
import Card from "./Card";

const Board = () => {
    
    const pars =[];
    const renderCards = () => {
    return deck().map(({ icon }, index) => (
      <Card key={index} cardIcon={icon} isPair={isPair}/>
    ));
  };

  const isPair =(value)=>{
      pars.push(value);
      if(pars.length===2){
          if(pars[0]===pars[1]){
              console.log("correcto");
              pars.length=0;
          }else{
            console.log("nope")
            pars.length=0;
          }
      }
      
  }

  return (
    <>
      <div className="__Game_area">
      {renderCards()}
      </div>
    </>
  );
};
export default Board;
