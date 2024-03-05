import { createBrowserRouter, } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Login from '../AuthRoutes/Login'
import Error from '../Error/Error'
import SignUp from '../AuthRoutes/SignUp'
import AddProject from '../Projects/ProjectComponents/AddProject'
import ProjectsLayout from '../Layouts/ProjectsLayout'

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
    },
    {
        path: '/projects',
        element: <ProjectsLayout></ProjectsLayout>,
        children: [
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/projects/add',
                element: <AddProject></AddProject>
            },
            {

            }
        ]
    },
])

export default routes