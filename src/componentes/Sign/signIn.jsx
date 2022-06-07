import React from "react";
import {Formik} from 'formik';
import * as Yup from "yup";
import {ContainerSign,Img,ContainerBtn,Button,Input, Form,Errors} from './styleSign'
import IconNaruto from '../../assets/iconNarutoSign.png'
import { useDispatch, useSelector } from "react-redux";
import { SignInAction, AcountOnAction } from "../../redux/actions/cardAccion";
import { useNavigate } from "react-router-dom";

const SignIn = ({setSign})=>{
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
        let stateAcount = stateBaseDatos.find(element=> element.name === values.name && element.password === values.password) 
        if(stateAcount=== undefined) {stateAcount = "NotUser"}
        return stateAcount
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
            if (AcountValidate==='NotUser'){console.log("fail")}
            else{
                navigate('/home')
                dispatch(SignInAction(AcountValidate))
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
                    {touched.name && errors.name && <h1>{errors.name}</h1>}
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
                    <Button type="submit">Sign In</Button>
                    <Button onClick={()=> setSign(false)} type="button">Sign Up</Button>
                </ContainerBtn>
            </Form>
            )} 
        </Formik>
    )


}
export default SignIn