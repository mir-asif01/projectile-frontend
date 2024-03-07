import { NavLink } from 'react-router-dom'
import { useState } from 'react';
function Sidenav() {
    return (<div className='border-r-2 border-cyan-500 border-solid'>
        <ul className="flex flex-col justify-center gap-5 p-6">
            <li className="text-xl font-semibold hover:shadow-md cursor-pointer py-1"><NavLink to="/projects">All Projects</NavLink></li>
            <li className="text-xl font-semibold hover:shadow-md cursor-pointer py-1"><NavLink to="/projects/add">New Project</NavLink></li>
            <li className="text-xl font-semibold hover:shadow-md cursor-pointer p-1">New Tasks</li>
            <li className="text-xl font-semibold hover:shadow-md cursor-pointer p-1">All Tasks</li>
            <li className="text-xl font-semibold hover:shadow-md cursor-pointer p-1">Team Members</li>
            <li className="text-xl font-semibold hover:shadow-md cursor-pointer p-1">Forum</li>
            <li className="text-xl font-semibold hover:shadow-md cursor-pointer p-1">Link</li>
        </ul>

    </div>);
}

export default Sidenav;