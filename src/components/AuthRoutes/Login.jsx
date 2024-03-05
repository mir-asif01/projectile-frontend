import { Link, useNavigate } from "react-router-dom"
function Login() {

    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const loginInfo = {
            email,
            password
        }
        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(loginInfo)
        }).then(res => res.json())
            .then(res => {
                if (res.message) {
                    alert(res.message)
                }
                else {
                    console.log(res);
                    localStorage.setItem('user', JSON.stringify(res))
                    navigate('/')
                    window.location.reload()
                }
                form.reset()
            })

        // console.log({ email, password });
        // form.reset()
    }

    return (
        <>
            <div className="my-20 flex justify-center items-center">
                <form onSubmit={handleLogin} className="border-solid border-2 p-20 border-gray-300 rounded-lg">
                    <h1 className="text-center text-4xl mb-4">Login</h1>
                    <p className="my-5">Test Email : <span className="text-red-600 font-semibold">demo@gmail.com</span>, password : <span className="text-red-600 font-semibold"> demo</span></p>
                    <div>
                        <label className="font-semibold" htmlFor="email">Email</label>
                        <br />
                        <input required className="w-full px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="text" name="email" placeholder="Your Email" />
                    </div>
                    <br />
                    <div>
                        <label className="font-semibold" htmlFor="password">Password</label>
                        <br />
                        <input required className="w-full px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="password" name="password" placeholder="Password" />
                    </div>
                    <br />
                    <button type="submit" className="bg-cyan-400 px-5 py-2 rounded-lg font-semibold mb-3">Login</button>
                    <p>Don't have an account ? <Link className="underline" to='/signup'>Sign Up</Link> here</p>
                </form>
            </div>
        </>
    );
}

export default Login;