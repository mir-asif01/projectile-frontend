function Feedback() {
    const feedbacks = [
        {
            id: 1,
            userName: 'userName',
            email: 'user@email.com',
            feedbackText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, modi.'
        },
        {
            id: 2,
            userName: 'userName',
            email: 'user@email.com',
            feedbackText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, modi.'
        },
        {
            id: 3,
            userName: 'userName',
            email: 'user@email.com',
            feedbackText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, modi.'
        }
    ]
    return (
        <>
            <div className="mt-20 w-[70%] m-auto">
                <h1 className="text-4xl mb-10 text-center">Clients Feedback</h1>
                <div className="grid grid-cols-3 gap-10">
                    {feedbacks.map((feedback) => {
                        return <div key={feedback.id} className=" space-y-2 border-solid border-2 border-gray-200 p-6 hover:shadow-md">
                            <h1 className="text-center text-xl font-semibold">{feedback.userName}</h1>
                            <p className="text-center text-xl font-semibold">{feedback.email}</p>
                            <p className="">{feedback.feedbackText}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}

export default Feedback;