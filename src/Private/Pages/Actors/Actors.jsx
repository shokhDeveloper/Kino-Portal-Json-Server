import "./Actors.css"
import { Container } from "../../../Container"
import { useParams } from "react-router"
import { useCallback, useContext, useEffect, useState } from "react"
import { Api, BASE_IMG_URL, BASE_URL } from "../../../API"
import { Context } from "../../../Context/Context"
import { Link } from "react-router-dom"

export const Actors = () => {
    const params = useParams()
    const { actors, setActors} = useContext(Context)
    const [info, setInfo] = useState({
        isLoading: true, 
        data: [],
        isError: false
    })
    const getActors = useCallback(() => {
        let data = Api.getActor(params.id)
        data.then((response) => setActors(response.data.cast))
    },[params.id])
    const getMovies = useCallback(() => {
        let data = Api.getMovie(params.id)
        data.then((response) => setInfo({
            isLoading: false, 
            data: response.data,
            isError: false
        }))
    },[params.id])
    useEffect(() => {
        getActors()
        getMovies()
    },[getActors, getMovies])
    return(
        <div className="actors">
            <Container>
                <h1>{info?.data?.title} <span>kinosi uchun aktyorlar va boshqalar</span></h1>
                {actors?.length?
                    <div className="actors_cards">
                        {actors?.map((item) => (
                           <Link className="actors_card" to={`/actor/${item.credit_id}`}>
                           <div>    
                                {item.profile_path !== null?<img src={BASE_IMG_URL+"/"+item.profile_path} alt="" />:<h1 className="nots">Bu aktyorning rasmi topilmadi</h1>}
                                <h2>{item.name}</h2>
                                <h4>{item.character} <span style={{color: "crimson"}}>rolini ijro etgan</span></h4>
                            </div>
                           </Link>
                        ))}
                    </div>
                :<h1>{info?.data?.title} haqida ma'lumotlar topilmadi</h1>}
            </Container>
        </div>
    )
}