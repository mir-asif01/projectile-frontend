function FeedbackForm() {

    const userString = localStorage.getItem("user")
    const user = JSON.parse(userString)
    const handleFeedback = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const feedbackText = form.feedbackText.value

        const feedback = {
            email,
            name,
            feedbackText
        }
        fetch('http://localhost:5000/feedback', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(res => {
                alert('feedback added')
                form.reset()
            })

        console.log(feedback);
    }

    if (!user) {
        return (<div className="h-[200px] flex justify-center items-center">
            <h1 className="text-3xl text-cyan-500 font-semibold">Please Login/Signup to give feedback</h1>
        </div>)
    } else {
        return (
            <>
                <div className="mt-10 w-full p-20">
                    <form onSubmit={handleFeedback} className="border-solid border-2 p-10 border-gray-300 rounded-lg">
                        <h1 className="text-center text-4xl mb-4">Please share your thoughts</h1>
                        <div>
                            <label className="font-semibold" htmlFor="email">Your Email</label>
                            <br />
                            <input required defaultValue={user?.email ? user.email : ""} className="w-full px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="text" name="email" placeholder="Your Email" />
                        </div>
                        <br />
                        <div>
                            <label className="font-semibold" htmlFor="password">Your Name</label>
                            <br />
                            <input required defaultValue={user?.userName ? user.userName : ""} className="w-full px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="text" name="name" placeholder="Your Name" />
                        </div>
                        <br />
                        <div>
                            <label className="font-semibold" htmlFor="password">Your Feedback</label>
                            <br />
                            <textarea className="w-full px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" required name="feedbackText" id="" cols="30" rows="7"></textarea>
                        </div>
                        <br />
                        <button type="submit" className="bg-cyan-400 px-5 py-2 rounded-lg font-semibold mb-3 text-gray-900">Submit Feedback</button>
                    </form>
                </div>
            </>
        );
    }

}

export default FeedbackForm;