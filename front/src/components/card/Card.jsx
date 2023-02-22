import styles from "./card.module.css";
import { Link, useSearchParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { agregarFav, eliminarFav } from "../../redux/actions/Actions.js";
import React from "react";

export  default function Card(props) {

  const [isFav, setisFav] = React.useState(false)

  const myFavorites = useSelector((state) => state.myFavorites)
  const allCharacters = useSelector((state) => state.allCharacters)

  const dispatch = useDispatch()


  const handleFavorite = () => {
    if (isFav) {
      setisFav(false)
      dispatch(eliminarFav(props.id, console.log(props.id, "funca eliminar")))
    }
    else{
      setisFav(true)
      dispatch(agregarFav(props) ) 
    }
  };

  React.useEffect(() => {
    allCharacters?.forEach((fav) => {
       if (fav.id === props.id) {
          setisFav(true);
       }
    });
 }, [allCharacters]);

 React.useEffect(() => {
  myFavorites?.forEach((fav) => {
     if (fav.id === props.id) {
        setisFav(true);
     }
  });
}, [myFavorites]);

  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <button onClick={props.onClose}>X</button>
      <Link to={`/detail/${props.id}`}> 
        <h1>{props.name}</h1>
      </Link>
      <h1>{props.species}</h1>
      <h1>{props.gender}</h1>
      <img src={props.image} alt={props.name} />
      
    </div>
  );
}


//export function mapStateToProps(state){
//  return {myFavorites: state.myFavorites};
//};

//export function mapDispatchToProps(dispatch) {
//  return {
//    agregarFav: (character) => dispatch(agregarFav(character)),
//    eliminarFav: (id) => dispatch(eliminarFav(id)),
//  };
//};

//export default connect(mapStateToProps, mapDispatchToProps)(Card);

/*       isFav === false
      ? ((isFav = true), agregarFav(props))
      : ((isFav = false), eliminarFav(props.id));
*/
