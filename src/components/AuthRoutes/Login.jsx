function Login() {

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log({ email, password });
        form.reset()
    }

    return (
        <>
            <div className="my-20 flex justify-center items-center">
                <form onSubmit={handleLogin} className="border-solid border-2 p-20 border-gray-800">
                    <h1 className="text-center text-3xl mb-4">Login</h1>
                    <div>
                        <label className="font-semibold" htmlFor="email">Email</label>
                        <br />
                        <input required className="px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="text" name="email" placeholder="Your Email" />
                    </div>
                    <br />
                    <div>
                        <label className="font-semibold" htmlFor="password">Password</label>
                        <br />
                        <input required className="px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="password" name="password" placeholder="Password" />
                    </div>
                    <br />
                    <button type="submit" className="bg-cyan-400 px-5 py-2 rounded-lg font-semibold">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;