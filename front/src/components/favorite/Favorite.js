import { connect, useDispatch, useSelector } from "react-redux";
import  Card  from "../card/Card.jsx"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { orderCards } from "../../redux/actions/Actions.js";
import { filterCards } from "../../redux/actions/Actions.js";

export  default function Favorite(props){
    const dispatch = useDispatch()
    const {myFavorites} = useSelector((state) => state)

    const filtro = (e) => {
        dispatch(filterCards( e.target.value))
    }
    const order = (e) => {
        dispatch(orderCards( e.target.value))
    }


    return (
    <div>
        <h1> FAVORITOS </h1>
            <select onChange={order} >
                <option value="elige">eleccion</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendiente">Descendiente</option>
            </select>
            <select onChange={filtro} > 
                <option value= "filtra">Filter</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
                    {myFavorites?.map((elem) =>(
                    <Card 
                    key={elem?.id}
                    name={elem?.name} 
                    species={elem?.species} 
                    gender={elem?.gender} 
                    image={elem?.image} 
                    id={elem?.id} 
                    onClose={()=> alert("toca el corazon compa")}
                    />
                 ))
                }
    </div>
    )
}

//export function mapStateToProps(state){
//    return{
//        allCharacters: state.allCharacters,
//    }
//}
//export function mapDispatchToProps(dispatch){
//    return {
//        orderCards: function (id){dispatch(orderCards(id))},
//        filterCards: function(status){dispatch(filterCards(status))}
//    }
//}

//export default connect(null, nu//ll)(Favorite)