function AddTeamMembers({ user, users, teamMembers, setTeamMembers }) {
    const loggedInUser = user?.email
    return (
        <ul>
            {
                users.map(user => {
                    return (<div key={user?.email} className="flex flex-col gap-2 snap-y">
                        <button onClick={(e) => {
                            let member = e.target.value
                            if (member === loggedInUser) {
                                alert('You are already added as creator')
                                return
                            }
                            if ((teamMembers.find((t) => t === member))) {
                                alert('member is alredy added')
                            }
                            else {
                                setTeamMembers([member, ...teamMembers])
                            }
                        }}
                            value={user?.email}>{user?.email}</button>
                    </div>)
                })
            }
        </ul>
    );
}

export default AddTeamMembers;