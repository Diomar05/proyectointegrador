import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Details.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        }
      })
      .catch((error) => window.alert(error.response.data.error));

    return setCharacter({});
  }, [id]);

  return (
    <div className="containerDetail">
      <div className="CardDetail">
        <div className="textDetail">
          <h1>{character.name}</h1>
          <img className="imgDetail" src={character.image} alt={`${character.name}`} />
          {character.name && (
            <div>
              <h2>STATUS: {character.status}</h2>
              <h2>SPECIES: {character.species}</h2>
              <h2>GENDER: {character.gender}</h2>
              <h2>ORIGIN: {character.origin}</h2>
            </div>
          )}
        </div>  
      </div>
    </div>
  );
};
export default Detail;
