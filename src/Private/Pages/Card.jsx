import { Link } from "react-router-dom"
import "./Card.css"
export const Card = ({name, image, date, id}) => {
    return(
        <Link to={`/movie/${id}`} className="card" style={{textAlign: "Center"}}>
        <div>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h4>{date}</h4>
        </div>
        </Link>
        
    )
}