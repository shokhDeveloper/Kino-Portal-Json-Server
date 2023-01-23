import "./Movie.css"
import { Container } from "../../Container"
import { useParams } from "react-router"
import { useCallback, useContext, useEffect } from "react"
import { Api, BASE_IMG_URL } from "../../API"
import { Context } from "../../Context/Context"
import { Link, NavLink } from "react-router-dom"

export const Movie = () => {
    const params = useParams()
    const {movie, setMovie} = useContext(Context)
    const getMovies = useCallback( () => {
        let movie = Api.getMovie(params.id)
        movie.then((response) => {
            setMovie([response.data])})
    },[params.id])
    useEffect(() => {
        getMovies()
    },[getMovies])
    return(
        <>
            {movie?.length > 0?
                <div className="movie">
                <Container>
                       {movie?.map((item) => (
                          <div className="parent_movie">
                            <div key={item.id} className="movie_card">
                                 <img src={BASE_IMG_URL+"/"+item.poster_path} alt="" />
                                 <h2>{item.title}</h2>
                                <h4>{item.release_date}</h4>
                            </div>
                            <div className="movie_text">
                                <h2><span style={{textDecoration: "underline"}}> {item.title}</span> qisqacha <span style={{color: "crimson"}}>(orginal description)</span></h2>
                                <p>{item.overview}</p>
                                <NavLink to={`/actors/${item.id}`} style={{color: "crimson", letterSpacing: "1px"}}>Aktryorlar {(item.title)}</NavLink>
                            </div>
                          </div>
                      ))} 
                </Container>
            </div>
            :<h1>Kino topilmadi</h1>}
        </>
    )
}