import { Link } from "react-router-dom";
import "./PageError.css"

export default function PageError () {
    return(

          <div >
            <div className="error">
			<div className="error-code">404</div>
			<div className="error-content">
				<div className="error-mensage">No pudimos encontrar lo que estabas buscando...</div>
				<div className="error-text2">
                La página que buscas no existe. <br />
                Quizás, retornando al inicio esta páginas te ayudarán a encontrar lo que estás buscando.
				</div>
				<div>
					<Link to="/home" className="btn btn-success px-3">ir al Inicio</Link>
				</div>
			</div>
		</div>
          </div>
    )
}