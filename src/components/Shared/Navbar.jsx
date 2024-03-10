import { NavLink, useNavigate } from "react-router-dom";



function Navbar() {
    const navigate = useNavigate()
    const user = localStorage.getItem("user")
    const userObj = JSON.parse(user)



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
                                <li><img className="h-10 w-10 rounded-full" src={userObj?.profileImg} alt="" /></li>
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