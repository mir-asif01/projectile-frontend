import { Link } from "react-router-dom"


function SignUp() {

    const handleSignup = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const userName = form.name.value
        const password = form.password.value
        const profilePic = form.profilePic.files[0]

        const formData = new FormData()
        formData.append('image', profilePic)

        fetch(`https://api.imgbb.com/1/upload?key=00d3d611a0f9e9e12e2838db5be04835`, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(imgData => {
                if (imgData.data.url) {
                    const profileImg = imgData.data.url
                    const user = {
                        email,
                        userName,
                        password,
                        profileImg
                    }
                    // signup post api code here

                    fetch('http://localhost:5000/signup', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    }).then(res => res.json())
                        .then(res => {
                            alert(res.message)
                            form.reset()
                        })

                    //signup code
                } else {
                    console.log('Error image not uploaded');
                }
            })
        form.reset()
    }

    return (
        <>
            <div className="my-20 flex justify-center items-center">
                <form onSubmit={handleSignup} className="border-solid border-2 p-20 border-gray-300 rounded-lg">
                    <h1 className="text-center text-4xl mb-4">Sign Up</h1>
                    <div>
                        <label className="font-semibold" htmlFor="email">Email</label>
                        <br />
                        <input required className="w-full px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="text" name="email" placeholder="Your Email" />
                    </div>
                    <br />
                    <div>
                        <label className="font-semibold" htmlFor="name">Name</label>
                        <br />
                        <input required className="w-full px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="text" name="name" placeholder="Your Name" />
                    </div>
                    <br />
                    <div>
                        <label className="font-semibold" htmlFor="password">Password</label>
                        <br />
                        <input required className="w-full px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="password" name="password" placeholder="Password" />
                    </div>
                    <br />
                    <div>
                        <label className="font-semibold" htmlFor="profilePic">Profile Picture</label>
                        <br />
                        <input required className="w-full px-3 py-2 border-2 border-solid border-gray-300 rounded-lg" type="file" name="profilePic" placeholder="Profile" />
                    </div>
                    <br />
                    <button type="submit" className="bg-cyan-400 px-5 py-2 rounded-lg font-semibold mb-3">Sign Up</button>
                    <p>Already have an account? <Link className="underline" to='/login'>Login</Link> here</p>
                </form>
            </div>
        </>
    );
}

export default SignUp;