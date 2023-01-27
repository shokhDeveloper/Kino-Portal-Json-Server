import { useCallback, useContext, useEffect, useState } from "react"
import { Api, BASE_IMG_URL } from "../../API"
import { Container } from "../../Container"
import { Context } from "../../Context/Context"
import { Card } from "../../Private/Pages/Card"
import { Paginate } from "../../Private/Pages/Paginate"

export const Home = () => {
    const {recomindations, setRecomindations, activePage, setActivePage} = useContext(Context)
    let [info, setInfo] = useState(0)
    const getRecomindations = useCallback(() => {
        let data = Api.getRecomindation(activePage)
        data.then((response) => {
            console.log(response.data.total_pages)
            setInfo(response.data.total_pages)})
        data.then((response) => setRecomindations(response.data.results))    
    },[activePage])
    useEffect(() => {
        getRecomindations()
    },[getRecomindations])
    return(
        <>
        <div className="home__teatr">
            <Container> 
            <div className="home_page">
            <Container>
            <h1>Ommabob kinolar</h1>
                {recomindations?.length > 0?
                    <div className="home_page_films">
                        {recomindations?.map((item) => (
                            <Card id={item.id} name={item.title} date={item.release_date} image={BASE_IMG_URL + "/" +item.poster_path}/>
                        ))}
                    </div>
                :<h1>Loading</h1>}
            </Container>            
        </div>
        </Container>
        </div>
        <Paginate totalPage={info}/>
        </>
    )
}