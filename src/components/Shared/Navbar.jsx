import { NavLink, useNavigate } from "react-router-dom";



function Navbar() {
    const user = localStorage.getItem("user")
    const navigate = useNavigate()
    console.log(user);
    const handleLogout = () => {
        localStorage.removeItem("user")
        navigate('/')
        window.location.reload()
    }
    return (
        <>
            <div className="flex justify-between items-center p-[20px] w-[100%] m-auto mb-10 bg-slate-900 text-white px-44">
                <div className="">
                    <p className="text-[30px] text-cyan-500 font-semibold"><NavLink to='/'>Projectile</NavLink></p>
                </div>
                <div>
                    <ul className="flex justify-between gap-7">
                        <li className="mx-2 text-[20px]"><NavLink to='/'>Home</NavLink></li>
                        {
                            user ? <>
                                <li className="mx-2 text-[20px]"><NavLink to='/projects'>Projects</NavLink></li>
                                <li className="mx-2 text-[20px]"><button onClick={handleLogout}>Log Out</button></li>
                            </>
                                : <>
                                    <li className="mx-2 text-[20px]"><NavLink to='/login'>Login</NavLink></li>
                                    <li className="mx-2 text-[20px]"><NavLink to='/signup'>Sign Up</NavLink></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;