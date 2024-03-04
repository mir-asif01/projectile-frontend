import createAccount from '../Images/create-acc.png'
import createProject from '../Images/start-new-project.png'
function Features() {
    const features = [
        {
            id: 1,
            title: 'User Authentication',
            desc: 'A new user can create and login to an acount'
        },
        {
            id: 2,
            title: 'Start A new Project',
            desc: 'Start a new project with your team'
        },
        {
            id: 3,
            title: 'Collab with team',
            desc: 'Collab with your team members'
        },
        {
            id: 4,
            title: 'Project forum',
            desc: 'Discuss with your team members'
        }
    ]
    return (
        <>
            <h1 className='text-center text-4xl my-7'>Common Features</h1>
            <div className='grid grid-cols-3 gap-10 w-[70%] m-auto'>
                {
                    features.map((feature) => {
                        return (
                            <div key={feature.id} className='flex flex-col justify-between items-center gap-2 hover:shadow-md border-2 p-7 cursor-pointer'>
                                <h1 className='text-xl font-semibold'>{feature.title}</h1>
                                <p className='text-center'>{feature.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Features;