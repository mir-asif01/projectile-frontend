import { NavLink } from "react-router-dom";

function Error() {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
                <p className="text-red-600 text-[40px]">Page not found</p>
                <p><NavLink className="text-[20px] underline" to='/'>Back to home</NavLink></p>
            </div>
        </>
    );
}

export default Error;