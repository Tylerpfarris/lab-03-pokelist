import pokedata from '../pokedata';

export let uniqueType = [];
//mapping over the data arr
pokedata.map(pokemon => {
    //if the new array doesnt include the pokemon keyword push it onto the array. if it does skip over it.
  if (!uniqueType.includes(pokemon.type_1)) uniqueType.push (pokemon.type_1)});

  
 