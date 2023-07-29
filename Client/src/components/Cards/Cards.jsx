import style from "./Cards.module.css"
import Card from '../Card/Card';

export default function Cards(props) {
   const { characters} = props;

   return (
      
         <div className={style.container}>
           {characters.map((personaje) => {
            const {id,name,status,species,gender,origin,image} = personaje;

            return (
               <Card
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin}
                  image={image}
                  onClose={props.onClose}
               />
            )
         })}
      </div>
   );
}


