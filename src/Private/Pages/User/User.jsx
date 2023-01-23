import axios from "axios"
import { useCallback, useContext, useEffect } from "react"
import { useParams } from "react-router"
import { Api, BASE_IMG_URL, BASE_URL } from "../../../API"
import { Container } from "../../../Container"
import { Context } from "../../../Context/Context"
import "./User.css"
export const User = () => {
    const params = useParams()
    const {userActor, setUserActor} = useContext(Context)
    const getUsers = useCallback(() => {
        let data = Api.getUser(params.id)
        data.then((response) => {console.log(response.data)
             setUserActor([response.data])})
    },[params.id])
    useEffect(() => {
        getUsers()
    },[getUsers])
    return(
        <>
            <Container>
                {userActor?.length?
                    <div className="user">
                        {userActor?.map((item) => (
                            <div className="user_support">
                                <div className="user_align">
                                {item.person.profile_path !== null?
                                <img src={BASE_IMG_URL+"/"+item.person.profile_path} alt="" /> :<h1 style={{color: "crimson"}}>Bu Aktyorga tegishli bo'lgan rasmlar topilmadi</h1>}
                                <h3>{item.person.name}</h3>
                                </div>
                                <div className="user_text">
                                    <h3>{item.person.name} ning <span style={{color: "crimson"}}>{item.media.title}</span> uchun roli haqida description</h3>
                                    <p>{item.media.overview}</p>
                                </div>
                            </div>
                        ))}
                    </div>       
                :<h1>Malumotlar topilmadi</h1>}
            </Container>
        </>
    )
}