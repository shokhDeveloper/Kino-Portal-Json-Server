import "./About.css"
import { Container } from "../../../Container"
import img from "../../../assets/images/aTjbqMONy77fHJrIYu14g1F0d5h.jpg"
import { NavLink } from "react-router-dom"
export const About = () => {
    return(
        <div className="about">
            <Container>
                <div className="about_align">
                <img src={img} alt="" />
                    <div className="about__text">
                        <h2>Dastur afzalligi</h2>
                        <p> Bu dasturda barcha horij filmlarini va aktyorlari va chiqqan sanasi hullas har bir detalga quldan kelgancha e'tibor qaratilgan va albatta dasturdan foydalanish uchun <NavLink to={"/register"}>ruyhattan o'tishingiz </NavLink> kerak ! Loyihani o'ziga kelsak o'zi Javascript ning React js kutubhonasi orqali yaratilgan va api lar uchun axios va Redux Context texnalogiyalaridan foydalanilgan ! Eslatib o'taman loyiha bir kishi tomonidan yaratilgan va ma'lumotlar TMDB saytidan olingan ... <span style={{color: "crimson"}}>(Kamchiliklar uchun uzur)</span> </p>
                    </div>
                </div>
            </Container>    
        </div>
    )
}
