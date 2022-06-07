import { Route, useNavigate } from "react-router-dom";
import SignIn from '../../pages/signIn'
const Navigate = useNavigate
// import { useNavigate } from 'react-router';
// const navigate = useNavigate()
// const GuardedRoute = ({ component: Component, auth, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         console.log(props),
//         auth === true
//             ? <Component {...props} />
//             : navigate('/sign-in')
//     )} />
// )
function GuardedRoute ({ component: Component, login, ...rest  }){
        // <Route path='/sign-in' element={<SignIn/>}/>
        return login ? <Component/> : <SignIn path="/sign-in"/>;
        // <Route 
        //     {...rest}
        //     render={(props)=>(
        //         <Component {...props}/>
        //     )}
        //     // {...rest} 
        //     //     render={(props) => (
        //     //         console.log(props),
        //     //         rest === false
        //     //         ? <Component {...props} />
        //     //         : console.log(Component, auth, ...rest)
        //     //     )} 
        // />
    }
export default GuardedRoute;