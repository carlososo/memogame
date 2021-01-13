import _ from 'lodash';
import FontAwesomeClassess from './fontAwesomeClasses'

const deckLength =20;

const deck =()=>{

    const fontAwesomeClassess = FontAwesomeClassess()
    let cartas =[]

    while(cartas.length<deckLength){
        
        const index = Math.floor(Math.random() * fontAwesomeClassess.length);
        const carta={
            icon:fontAwesomeClassess.splice(index,1)[0],
            matched:false
        };
        cartas.push(carta);
        cartas.push({...carta});
    }
    
    return _.shuffle(cartas);
}

export default deck;