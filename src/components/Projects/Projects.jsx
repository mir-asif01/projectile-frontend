import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Projects() {

    const [projects, setProjects] = useState([])
    const [memberProjects, setMemberProjects] = useState([])

    const userString = localStorage.getItem("user")
    const user = JSON.parse(userString)

    // fetch projects created by logged in user
    useEffect(() => {
        fetch(`https://projectile-server.vercel.app/projects?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [user?.email])

    // fetch projects where user is a member
    useEffect(() => {
        fetch(`https://projectile-server.vercel.app/memberOfProjects?email=${user?.email}`)
            .then(res => res.json())
            .then(res => setMemberProjects(res))
    }, [])
    return (
        <div>
            <h1 className="text-3xl m-8">Projects <span className="text-cyan-400 font-bold">you</span> created</h1>
            <div className="w-[100%] max-h-screen flex justify-center items-center">
                <div className="grid grid-cols-2 gap-10 ">
                    {
                        projects.length > 0 ? projects.map(project => {
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
                        }) : <>
                            <p className="text-red-600 text-3xl text-center">No projects were found <br /><NavLink to="/projects/add" className="underline text-cyan-700">Add Here</NavLink></p>
                        </>
                    }
                </div>
            </div>
            <h1 className="text-3xl m-8">Projects you are <span className="text-cyan-400 font-bold">Member</span> of</h1>
            <div className="w-[100%] max-h-screen flex justify-center items-center">
                <div className="grid grid-cols-2 gap-10 ">
                    {
                        memberProjects.length > 0 ? memberProjects.map(project => {
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
                        }) : <>
                            <p className="text-red-600 text-3xl text-center">*You are not member of any project </p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;