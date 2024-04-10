import { createBrowserRouter, } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Login from '../AuthRoutes/Login'
import Error from '../Error/Error'
import SignUp from '../AuthRoutes/SignUp'
import AddProject from '../Projects/ProjectComponents/AddProject'
import ProjectsLayout from '../Layouts/ProjectsLayout'
import ProjectDetails from '../Projects/ProjectComponents/ProjectDetails'
import PrivateRoute from './PrivateRoute'

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
        element: <PrivateRoute>{<ProjectsLayout></ProjectsLayout>}</PrivateRoute>,
        // loader : ,
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
                path: '/projects/:id',
                loader: ({ params }) => fetch(`https://projectile-server.vercel.app/projects/${params.id}`),
                element: <ProjectDetails></ProjectDetails>
            }
        ]
    },
])

export default routes