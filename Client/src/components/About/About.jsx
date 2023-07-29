import "./About.css";
import Diomar from './diomar.jpg'

export default function About() {
  return (
    <div className="contenedorAbout">
      <div className="CardAbout">

        <div className="textAbout">
          <img className="imageAbout" src={Diomar} alt="" />
          <h1 >Diomar Quintero Rozo</h1>
          <h2 >Edad 37 Años</h2>
          <h2 >Ramoid07@gmail.com</h2>
          </div>
      </div>
    </div>
  );
}
