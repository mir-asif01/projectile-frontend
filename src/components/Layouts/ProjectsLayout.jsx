import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Outlet } from "react-router-dom";
import Sidenav from "../Projects/ProjectComponents/Sidenav";
function ProjectsLayout() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="w-full">
                    <Navbar></Navbar>
                </div>
                <div className="flex justify-between items-center w-[100%]">
                    <div className="w-[20%]">

                        <Sidenav></Sidenav>
                    </div>
                    <div className="w-[80%]">

                        <Outlet className="w-[80%]"></Outlet>
                    </div>
                </div>
                <div className="w-full">
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

export default ProjectsLayout;