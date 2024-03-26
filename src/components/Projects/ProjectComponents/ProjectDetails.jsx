import { useLoaderData } from "react-router-dom";

function ProjectDetails() {
    const project = useLoaderData()
    const { creator, createdDate, deadlineDate, description, isCompleted, title, teamMembers } = project
    return (
        <div className="h-full w-full flex justify-start p-5 items-center">
            <div className="w-[350px] px-5 py-4 shadow-md border-cyan-200 border-solid rounded-lg space-y-3">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <h1 className="text-2xl">{creator}</h1>
                <p> <span className="text-green-700 font-bold">{createdDate}</span> to <span className="text-red-700 font-bold">{deadlineDate}</span></p>
                <p>{description}</p>
                <p className="text-red-700 font-bold">{!isCompleted ? "On Going" : "completed"}</p>
                <div>
                    {
                        teamMembers.map((t) => { return (<h1 key={t}>{t}</h1>) })
                    }
                </div>
                <div className="">
                    <div className="p-1 flex justify-center items-center">
                        <input type="text" placeholder="Task" className="outline-none border border-solid border-cyan-500 px-2 py-1 rounded-l-lg" />
                        <button className="bg-cyan-500 text-white text-xl px-2 py-1 rounded-r-lg">Add Task</button>
                    </div>
                    <div className="mt-2">
                        <ul>
                            <li>Task 1 </li>
                            <li>Task 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;