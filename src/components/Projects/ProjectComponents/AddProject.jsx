import { useState } from "react";

function AddProject() {

    const userString = localStorage.getItem("user")
    const user = JSON.parse(userString)


    const [createdDate, setCreatedDate] = useState()
    const [deadlineDate, setDeadlineDate] = useState()

    const createProjecHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const creator = form.creator.value
        const isCompleted = false
        const teamMembers = ["asif", "tutul"]
        const forum = ["comment1", "comment2"]

        const projectModel = {
            title,
            description,
            creator,
            createdDate,
            deadlineDate,
            isCompleted,
            teamMembers,
            forum
        }

        console.log(projectModel);

        form.reset()
    }

    return (
        <>
            <div className="p-16">
                <h1 className="text-3xl text-center font-semibold mb-10">Add a new Project </h1>
                <form onSubmit={createProjecHandler} className="flex justify-evenly">
                    <div>
                        <div>
                            <label className="font-semibold" htmlFor="title">Title</label>
                            <br />
                            <input required className=" px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="text" name="title" placeholder="title of your project" />
                        </div>
                        <br />
                        <div>
                            <label className="font-semibold" htmlFor="description">Description</label>
                            <br />
                            <input required className=" px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="text" name="description" placeholder="describe your project" />
                        </div>
                        <br />
                        <div>
                            <label className="font-semibold" htmlFor="creator">Creator</label>
                            <br />
                            <input required defaultValue={user?.email ? user?.email : ""} className=" px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="text" name="creator" placeholder="Your Email" />
                        </div>
                        <br />
                    </div>
                    <div>
                        <div>
                            <label className="font-semibold" htmlFor="createdAt">Created At</label>
                            <br />
                            <input required onChange={(e) => { setCreatedDate(e.target.value) }}
                                defaultValue={createdDate}
                                className=" px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="date" name="createdAt" placeholder="Select Current date" />
                        </div>
                        <br />
                        <div>
                            <label className="font-semibold" htmlFor="deadline">Deadline</label>
                            <br />
                            <input required onChange={(e) => {
                                setDeadlineDate(e.target.value)
                            }}
                                defaultValue={deadlineDate}
                                className=" px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="date" name="deadline" placeholder="Deadline of the project" />
                        </div>
                        <button className="bg-cyan-400 px-4 py-2 rounded-sm font-semibold mt-4" type="submit">Create Project</button>
                    </div>

                </form>

            </div>
        </>
    );
}

export default AddProject;