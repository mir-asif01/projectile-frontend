import { createBrowserRouter, } from 'react-router-dom'
import Main from '../Main/Main'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Login from '../AuthRoutes/Login'
import Error from '../Error/Error'

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
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])

export default routes