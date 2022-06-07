import React from "react";
import {Formik} from 'formik';
import * as Yup from "yup";
import {ContainerSign,Errors,Img,ContainerBtn,Button,Input, Form} from './styleSign'
import IconNaruto from '../../assets/iconNarutoSign.png'
import { useDispatch, useSelector } from "react-redux";
import { SignUpAction, AcountOnAction } from "../../redux/actions/cardAccion";
import { useNavigate } from "react-router-dom";
    const SignUp = ({setSign})=>{
        const state = useSelector(state=>state.cardReducer)
        const stateBaseDatos = state.BaseDatos
    const dispatch = useDispatch()
    
    const RegisterSchema = Yup.object({
        name: Yup.string().required('Este campo es obligatorio'),
        email: Yup.string().email('Este email es invalido'),
        password: Yup.string().required('Este campo es obligatorio').min(8,'Debe tener mas de 8 y mayuscula').max(16,"menos de 16")
    });

    let navigate = useNavigate();
    const ValidateSignIn = (values) => {
        let stateAcountName = stateBaseDatos.find(element=> element.name === values.name) 
        let stateAcountEmail = stateBaseDatos.find(element=> element.email === values.email) 
        if(stateAcountName!== undefined) {stateAcountName = "Ya existe"}
        if(stateAcountEmail!== undefined) {stateAcountEmail = "Ya existe"}
        const arrayErrors = [stateAcountName,stateAcountEmail]
        return arrayErrors
    }
    const errorB = ()=>{

    }
    return(
        <Formik
        initialValues={
            {
                name:"",
                email:"",
                password:""
            }
        }
        validationSchema={RegisterSchema}
        onSubmit={(values)=>{
            const AcountValidate = ValidateSignIn(values)
            console.log(AcountValidate)
            if (AcountValidate!=='NotUser'){console.log("fail")}
            else{
                navigate('/home')
                dispatch(SignUpAction(values))
                dispatch(AcountOnAction(true))
            }
        }}
        validateOnSubmit
        >
            {({handleBlur,handleChange,handleSubmit,touched,values,errors})=>(
            <Form onSubmit={handleSubmit}>
            <Img src={IconNaruto} alt="narutoIcon"/>
                <ContainerSign>
                    <Input
                    placeholder="User Name"
                    name="name"
                    
                    onChange={handleChange("name")}
                    value={values.name}
                    type="text"
                    />
                    {touched.name && errors.name && errorB() && <Errors>{errors.name}</Errors>}
                </ContainerSign>
                <ContainerSign>
                    <Input
                    placeholder="Email"
                    name="email"
                    
                    onChange={handleChange("email")}
                    value={values.email}
                    />
                    {touched.email && errors.email && <h1>{errors.email}</h1>}
                </ContainerSign>
                <ContainerSign>
                    <Input
                    placeholder="Password"
                    name="password"
                    
                    onChange={handleChange("password")}
                    value={values.password}
                    type={"password"}
                    />
                    {touched.password && errors.password && <h1>{errors.password}</h1>}
                </ContainerSign>
                <ContainerBtn>
                    <Button type="submit">Sign Up</Button>
                    <Button onClick={()=> setSign(true)} type="button">Sign In</Button>
                </ContainerBtn>
            </Form>
            )} 
        </Formik>
    )


}
export default SignUp
