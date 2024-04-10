import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function ProjectDetails() {
    const project = useLoaderData()
    const { _id, creator, createdDate, deadlineDate, description, isCompleted, title, teamMembers } = project
    const [tasks, setTasks] = useState([])
    const [comments, setComments] = useState([])

    const userString = localStorage.getItem("user")
    const user = JSON.parse(userString)

    // fetching all tasks from backend api
    useEffect(() => {
        fetch(`https://projectile-server.vercel.app/tasks?projectId=${_id}`)
            .then(res => res.json())
            .then(res => setTasks(res))
    }, [tasks])

    //fetching all comments from backend api
    useEffect(() => {
        fetch(`https://projectile-server.vercel.app/comments?projectId=${_id}`)
            .then(res => res.json())
            .then(res => {
                setComments(res)
            })
    }, [comments])

    const addTaskhandler = () => {
        let taskText = document.getElementById('taskId').value
        const task = {
            projectId: _id,
            taskText,
            isCompleted: false,
        }

        setTasks([task, ...tasks])
        fetch('https://projectile-server.vercel.app/addTask', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then((res) => {
            })
    }
    const addCommenthadler = () => {
        const commentText = document.getElementById("comment").value
        const comment = {
            projectId: _id,
            commentText,
            userEmail: user?.email
        }
        setComments([comment, ...comments])
        fetch("https://projectile-server.vercel.app/addComment", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        }).then(res => { res.json() })
            .then(res => { })

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
                        <button onClick={addTaskhandler} disabled={user?.email === creator ? false : true} className="bg-cyan-500 text-white text-xl px-2 py-1 rounded-r-lg">Add Task</button>
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
            <div className="p-5">
                <h1 className="text-3xl font-semibold text-center my-2">Comments</h1>
                <div className="p-1 flex justify-center items-center">
                    <input id="comment" type="text" placeholder="your comment" className="outline-none border border-solid border-cyan-500 px-2 py-1 rounded-l-lg" />
                    <button onClick={addCommenthadler} className="bg-cyan-500 hover:shadow-md shadow-cyan-500 text-white text-xl px-2 py-1 rounded-r-lg">Comment</button>
                </div>
                {/* comments*/}
                <div>
                    {comments.map((c) => {
                        return (<div key={c._id}>
                            <p className="bg-slate-100 rounded-lg px-4 py-2 my-2 text-center">{c.commentText}
                                <span className="cursor-pointer mx-3 text-slate-100 bg-cyan-600 rounded-[50%] px-2 py-1 text-[10px]">{c.userEmail.slice(0, 1)}</span></p>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;