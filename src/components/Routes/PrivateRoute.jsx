import Login from '../AuthRoutes/Login'
function PrivateRoute({ children }) {
    const user = localStorage.getItem("user")
    if (!user) {
        return (
            <Login></Login>
        )
    } else {
        return (children)
    }

}

export default PrivateRoute;