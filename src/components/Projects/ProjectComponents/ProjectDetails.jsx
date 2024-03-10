import { useLoaderData } from "react-router-dom";

function ProjectDetails() {
    const project = useLoaderData()
    const { creator, createdDate, deadlineDate, description, isCompleted, title, forum
        , teamMembers
    } = project

    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="w-[350px] p-10 hover:border hover:shadow-2xl border-cyan-200 border-solid rounded-lg space-y-3">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <h1 className="text-2xl">{creator}</h1>
                <p> <span className="text-green-700 font-bold">{createdDate}</span> to <span className="text-red-700 font-bold">{deadlineDate}</span></p>
                <p>{description}</p>
                <p className="text-red-700 font-bold">{!isCompleted ? "On Going" : "completed"}</p>
            </div>
        </div>
    );
}

export default ProjectDetails;