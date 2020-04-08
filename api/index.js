import config from '../utilities/apiConfig';
import fetch from 'isomorphic-unfetch';
function fetchCharacterList(queryList) {
   
   return fetch(`https://rickandmortyapi.com/api/character/?`+queryList);
       
}


export {fetchCharacterList}