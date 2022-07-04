import { useState } from 'react'
import SignUp from '../../componentes/Sign/signUp'
import SignIn from '../../componentes/Sign/signIn'
import {Container,Button,ContainerBtn} from '../../componentes/Sign/styleSign'
const Sign = () => {
    const [sign, setSign] = useState(true)
    return(
        <div className="SignIn h-screen">
            <Container>
            {sign ? <SignIn setSign={setSign}/> : <SignUp setSign={setSign}/>}
            </Container>
        </div>
    )
}

export default Sign