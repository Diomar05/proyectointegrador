import sCard from "./Card.module.css"
import { addFav, removeFav } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect} from "react";
import "../Cards/Cards";
import { NavLink } from "react-router-dom"


const Card = (props) => {
   const {id, name, species, status, gender, origin, image, onClose} = props

  
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);
   
   const [isFav, setIsFav] = useState(false);
      
   const handleFavorite = () => {
      let character = {
        id, name, status, species, gender, origin, image,
      };
  
      if (isFav) {
        setIsFav(false);
        removeFav(id);
      } else {
        setIsFav(true);
        addFav(character);
      }
    };
   
      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
      }, [myFavorites]);

   return (
      <div className={sCard.container} >
         <div className={sCard.containerButton}>
         
         {isFav ? (
               <button className={sCard.button1} onClick={handleFavorite}>❤️</button>
                  ) : (
               <button className={sCard.button1} onClick={handleFavorite}>🤍</button>
            )};

         <button className={sCard.button2} onClick={() => onClose(id)}>X</button>
         </div>

         <div className={sCard.containerImagen}>
            <img src={(image)} alt='imagen'/>
            
         </div>

         <div className={sCard.containerText}>
            <NavLink to={`/detail/${id}`} >
            <h2 className={sCard.text}>{name}</h2>
            </NavLink>
            <h2 className={sCard.text}>estatus: {status} </h2>
            <h2 className={sCard.text}>especies: {species} </h2>
            <h2 className={sCard.text}>género: {gender} </h2>
            <h2 className={sCard.text}>origen: {origin} </h2>
         </div>
         
         
      </div>
   );
}
export default Card;