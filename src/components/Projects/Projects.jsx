import { NavLink } from "react-router-dom";
import Sidenav from "./ProjectComponents/Sidenav";

function Projects() {
    return (
        <>
            <div className="w-[100%] flex justify-center items-center">
                {/* <div className="w-[20%] border-r-2 border-solid border-cyan-500 p-10">
                    <Sidenav></Sidenav>
                </div> */}
                <div className="w-[80%] p-10">
                    <div className="grid grid-cols-2 gap-20">
                        <div className="space-y-2">
                            <h1 className="text-2xl">Projectile</h1>
                            <p className="text-cyan-600 font-semibold">Mir Kamrul Ahsan Asif</p>
                            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fuga dolore id cumque, cum voluptatibus </p>
                            <p className="text-cyan-600 font-semibold">12-12-24</p>
                            <button className="bg-cyan-400 px-5 py-2 rounded-sm font-semibold mt-4 text-gray-700">Details</button>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-2xl">Projectile</h1>
                            <p className="text-cyan-600 font-semibold">Mir Kamrul Ahsan Asif</p>
                            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fuga dolore id cumque, </p>
                            <p className="text-cyan-600 font-semibold">12-12-24</p>
                            <button className="bg-cyan-400 px-5 py-2 rounded-sm font-semibold mt-4 text-gray-700">Details</button>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-2xl">Projectile</h1>
                            <p className="text-cyan-600 font-semibold">Mir Kamrul Ahsan Asif</p>
                            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fuga dolore id cumque, quae!</p>
                            <p className="text-cyan-600 font-semibold">12-12-24</p>
                            <button className="bg-cyan-400 px-5 py-2 rounded-sm font-semibold mt-4 text-gray-700">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;