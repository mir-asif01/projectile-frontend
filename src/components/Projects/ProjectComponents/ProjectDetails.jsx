import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function ProjectDetails() {
    const project = useLoaderData()
    const { _id, creator, createdDate, deadlineDate, description, isCompleted, title, teamMembers } = project
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/tasks?projectId=${_id}`)
            .then(res => res.json())
            .then(res => setTasks(res))
    }, [tasks])

    const addTaskhandler = () => {
        let taskText = document.getElementById('taskId').value
        const task = {
            projectId: _id,
            taskText,
            isCompleted: false,
        }

        fetch('http://localhost:5000/addTask', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then((res) => {
                if (res) {
                    alert("task added")
                }
                else {
                    alert('error happend')
                }
            })
        setTasks([task, ...tasks])
    }
    const addCommenthadler = () => {

    }
    return (
        <div className="h-full w-full flex justify-center p-5 items-center gap-4">
            <div className="w-[350px] shadow  px-5 py-4  border-cyan-200 border-solid rounded-lg space-y-3">
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
                        <input type="text" id="taskId" placeholder="Task" className="outline-none border border-solid border-cyan-500 px-2 py-1 rounded-l-lg" />
                        <button onClick={addTaskhandler} className="bg-cyan-500 text-white text-xl px-2 py-1 rounded-r-lg">Add Task</button>
                    </div>
                    <div className="mt-2">
                        <ul>
                            {
                                tasks.map((task) => {
                                    return (
                                        <li key={task?._id}>{task.taskText}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/* forum */}
            <div className="p-5 b">
                <p>all the comments about the projects will be shown here</p>
                <div className="p-1 flex justify-center items-center">
                    <input type="text" placeholder="your comment" className="outline-none border border-solid border-cyan-500 px-2 py-1 rounded-l-lg" />
                    <button className="bg-cyan-500 hover:shadow-md shadow-cyan-500 text-white text-xl px-2 py-1 rounded-r-lg">Comment</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;