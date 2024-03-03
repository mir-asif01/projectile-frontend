import { createBrowserRouter, } from 'react-router-dom'
import Main from '../Main/Main'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Login from '../AuthRoutes/Login'
import Error from '../Error/Error'
import SignUp from '../AuthRoutes/SignUp'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>

            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])

export default routes