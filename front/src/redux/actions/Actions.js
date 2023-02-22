import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "./actiontype"

export const agregarFav = (character) => {
  return { type: ADD_FAV, payload: character, };
};
export const eliminarFav = (id) => {
  return { type: DELETE_FAV, payload: id, };
};

export const filterCards = (status)=>{
  return {type: FILTER, payload: status}
}
export function orderCards (id){
  return { type: ORDER, payload: id, };
};
