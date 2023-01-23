import "./Home.css"
import { useCallback, useContext, useEffect, useState } from "react"
import { Api, BASE_IMG_URL } from "../../../API"
import { Container } from "../../../Container"
import { Context } from "../../../Context/Context"
import { Card } from "../Card"
import { Paginate } from "../Paginate"

export const Home = () => {
    const {popular, setPopular, activePage} = useContext(Context)
    let [info, setInfo] = useState(1)
    const getPopulars = useCallback(async () => {
        const data = await Api.getPopular(activePage)
        const page_info = await data.data
        setInfo(page_info.total_pages)
        const response = await data.data.results
        setPopular(response)
    },[activePage])
    useEffect(() => {
        getPopulars()
    },[getPopulars])
    return(
        <>
        
        <div className="home_page">
            <Container>
            <h1>Ommabob kinolar</h1>
                {popular?.length > 0?
                    <div className="home_page_films">
                        {popular?.map((item) => (
                            <Card id={item.id} name={item.title} date={item.release_date} image={BASE_IMG_URL + "/" +item.poster_path}/>
                        ))}
                    </div>
                :<h1>Loading</h1>}
            </Container>            
        </div>
    <Container>
        <Paginate totalPage={info}/>
    </Container>
    </>
    )
}