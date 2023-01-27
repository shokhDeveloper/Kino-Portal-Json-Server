import { useCallback, useContext, useEffect, useState } from "react"
import { Api, BASE_IMG_URL } from "../../API"
import { Container } from "../../Container"
import { Context } from "../../Context/Context"
import { Card } from "../../Private/Pages/Card"
import { Paginate } from "../../Private/Pages/Paginate"

export const Home = () => {
    const {rating, setRating, activePage, setActivePage} = useContext(Context)
    const [info, setInfo] = useState(0)
    const getRatings = useCallback(() => {
        let data = Api.getRating(activePage)
        data.then((response) => setInfo(response.data.total_pages))
        data.then((response) => setRating(response.data.results))
    },[activePage])
    useEffect(() => {
        getRatings()
    },[getRatings])
    return(
        <>
        <div className="rating__home">
            <Container>
                <h1>Rating baland bo'lgan kinolar</h1>
                {rating?.length > 0?
                    <div className="home_page_films">
                        {rating?.map((item) => (
                            <Card id={item.id} name={item.title} date={item.release_date} image={BASE_IMG_URL + "/" +item.poster_path}/>
                        ))}
                    </div>
                :<h1>Loading</h1>}
            </Container>
        </div>
        <Paginate totalPage={info}/>
        </>
    )
}