import { useState } from "react";
import { orderCards, filterCards, removeFav, addFav } from "../../redux/actions";
import Card from "../Card/Card";
import { connect, useSelector, useDispatch } from "react-redux";

const Favorites = (props) => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleOrder = (event) => {
    setAux(!aux);
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div style={{width:'100%'}}>
      <select onChange={handleOrder}>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value=''>Sin Filtrar</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>unknown</option>
      </select>

      <div
        style={{
          
        }}
      >
        {myFavorites.map((personaje) => {
          const { id, name, status, species, gender, origin, image } =
            personaje;
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              myFavorites={myFavorites}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
