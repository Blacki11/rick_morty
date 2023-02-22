import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "../actions/actiontype";
const initialState = {
  myFavorites: [],
  allCharacters: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
        };
    case DELETE_FAV:
      return  {        
        ...state,
        myFavorites: state.myFavorites.filter(
          (borrar) => borrar.id !== action.payload
        ),
        allCharacters: state.allCharacters.filter(
          (borrar) => borrar.id !== action.payload
        ),
      };
      case FILTER: 
      const allCharacterFilter = state.allCharacters?.filter((gender) => gender.gender === action.payload)
      return {
        ...state, 
        myFavorites: allCharacterFilter
      }
      case ORDER: 
      return {
        ...state,
        myFavorites: 
        action.payload === "Ascendente" 
        ? state.allCharacters.sort((a, b)  => a.id - b.id)
        : state.allCharacters.sort((a, b) => b.id - a.id)
      }
    default:
      return console.log(state, action, "entra en el default"),{...state};
  }
};

export default rootReducer;
