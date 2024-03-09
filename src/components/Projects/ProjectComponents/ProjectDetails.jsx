import { useLoaderData } from "react-router-dom";

function ProjectDetails() {
    const project = useLoaderData()
    const { creator, createdDate, deadlineDate, description, isCompleted, title, forum
        , teamMembers
    } = project

    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="w-[350px] p-10 hover:border hover:shadow-2xl border-cyan-200 border-solid rounded-lg">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <h1 className="text-2xl">{creator}</h1>
                <div className="flex justify-between items-center">
                    <p className="text-green-700 font-bold">{createdDate}</p>
                    <p className="text-red-700 font-bold">{deadlineDate}</p>
                </div>
                <p>{description}</p>
                <p className="text-red-700 font-bold">{isCompleted.toString()}</p>
            </div>
        </div>
    );
}

export default ProjectDetails;