import { NavLink } from "react-router-dom";
import Sidenav from "./ProjectComponents/Sidenav";
import { useEffect, useState } from "react";

function Projects() {

    const [projects, setProjects] = useState([])

    const userString = localStorage.getItem("user")
    const user = JSON.parse(userString)

    // const userEmail = user.email ? user.email : ""

    useEffect(() => {
        fetch(`http://localhost:5000/projects?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [user?.email])
    console.log(user?.email);
    console.log(projects);
    return (
        <>
            <div className="w-[100%] max-h-screen flex justify-center items-center">
                <div className=" p-10">
                    <div className="grid grid-cols-2 gap-20">
                        {
                            projects.map((project) => {
                                if (projects.length === 0) {
                                    return <p>No projects found</p>
                                }
                                else {
                                    return (
                                        <div key={project._id} className="space-y-2">
                                            <h1 className="text-2xl">{project.title}</h1>
                                            <p className="text-cyan-600 font-semibold">{project.creator}</p>
                                            <p className="text-justify">{project.description}</p>
                                            <p className="text-cyan-600 font-semibold">{project.deadlineDate
                                            }</p>
                                            <button className="bg-cyan-400 px-5 py-2 rounded-sm font-semibold mt-4 text-gray-700"><NavLink to={`/projects/${project._id}`}>Details</NavLink></button>
                                        </div>
                                    )
                                }

                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;