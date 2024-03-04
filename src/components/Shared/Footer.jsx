function Footer() {
    return (
        <>
            <div className="bg-slate-900 text-white p-10 mt-20">
                {/* upper section */}
                <div className="grid grid-cols-3 gap-14">
                    <div className="flex justify-center items-center">
                        <div>
                            <p className="text-[30px] text-cyan-500 font-semibold">PROJECTILE</p>
                            <p>We serve people, ensuring best possible outcomes</p>
                        </div>
                    </div>
                    <div className="px-10">
                        <h1 className="text-4xl mb-2">Our Features</h1>
                        <ul>
                            <li>User Authentication</li>
                            <li>Admin Dashboard</li>
                            <li>Team Collaboration</li>
                            <li>Create and Manage Projects</li>
                            <li>Discuss in the team forum</li>
                        </ul>
                    </div>
                    <div className="px-10">
                        <h1 className="text-4xl mb-2">Social Links</h1>
                        <ul>
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>

                {/* lower section  */}
                <div></div>
            </div>
        </>
    );
}

export default Footer;