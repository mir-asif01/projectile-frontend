function AddTeamMembers({ user, users, teamMembers, setTeamMembers }) {
    const loggedInUser = user?.email
    return (
        <ul>
            {
                users.map(user => {
                    return (<div className="flex flex-col gap-2 snap-y">
                        <button onClick={(e) => {
                            if (loggedInUser == e.target.value) {
                                alert('Creator can not be added as a team members')
                                return
                            }
                            else {
                                setTeamMembers([e.target.value, ...teamMembers])
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