import "./Register.css"
import { Container } from "../../Container"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"
import { Api } from "../../API";
import axios from "axios";
import { Context } from "../../Context/Context";
export const Register = () => {
    const {token, setToken, setUser} = useContext(Context)
    console.log(token)
    const [type, setType] = useState(!true)
    let button = useRef()
    const navigator = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Ism kiritish majburiy"),
            lastname: Yup.string().required("Familya kiritish majburiy"),
            email: Yup.string().email("Email xato").required("Email kiritish majburiy"),
            password: Yup.string().min(3, "Minimum 3").max(10, "Maximum 10").required("Parol kiritish majburiy")
    }) 
    })
    
    const handleSub = async (event) => {
        event.preventDefault()
        const jsons = await axios({
            method: "POST",
            url: "http://localhost:8888/register",
            headers: {
                "Content-Type": "application/json"
            },
            data: {firstname: formik.values.firstname, lastname: formik.values.lastname, email: formik.values.email, password: formik.values.password}
        })
        const response = await jsons.data
        if(response){
            const {accessToken, user} = response
            if(accessToken !== undefined){
                setToken(accessToken)
                setUser(user)
                navigator("/")
            }
        }
    }
    
    return(
        <div className="register" style={{display: token !== null? "none": "flex"}}>
            <Container>
            <form onSubmit={handleSub}>
                    <h1>Ro'yhattan o'tish</h1>
                    <label htmlFor="firstname">
                        <input required {...formik.getFieldProps("firstname")} placeholder="Ismingiz" type="text" id="firstname" />
                    </label>
                    {formik.touched.firstname === true? <span>{formik.errors.firstname}</span>: false}
                    <label htmlFor="lastname">
                        <input required type="text" {...formik.getFieldProps("lastname")} id="lastname" placeholder="Familyangiz" />
                    </label>
                    {formik.touched.lastname === true? <span>{formik.errors.lastname}</span>: false}
                    <label  htmlFor="email"> 
                        <input required type="email" {...formik.getFieldProps("email")} name="email" id="email" placeholder="Email" />
                    </label>
                    {formik.touched.email === true? <span>{formik.errors.email}</span>: false}
                    <label htmlFor="password">
                         <RemoveRedEyeIcon className="password" onClick={() => setType(!type)} style={{position: "relative", top: "0.6rem"}}/>
                        <input required placeholder="Parol" {...formik.getFieldProps("password")} type={type === true? "text": "password"} name="password" id="password" />
                    </label>
                    {formik.touched.password === true? <span>{formik.errors.password}</span>: false}
                    <label htmlFor="submit">
                    <button ref={button} type="submit"  className="submit">Yuborish</button>
                    </label>
            </form>
            </Container>
        </div>
    )
}