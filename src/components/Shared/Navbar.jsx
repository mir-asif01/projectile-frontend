import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center p-[20px] w-[75%] m-auto">
                <div className="">
                    <p className="text-[30px] text-cyan-500 font-semibold">PROJECTILE</p>
                </div>
                <div>
                    <ul className="flex justify-between">
                        <li className="mx-2 text-[20px]"><NavLink to='/'>Home</NavLink></li>
                        <li className="mx-2 text-[20px]"><NavLink to='/projects'>Project</NavLink></li>
                        <li className="mx-2 text-[20px]"><NavLink to='/login'>Login</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;