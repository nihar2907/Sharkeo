import React, { useState } from 'react'
import '../css/Login.css'
const Login = () => {

    const [data, setdata] = useState({
        useremail: "",
        password:""
    });
    const { useremail, password } = data;
    const handlechange = e => [
        setdata({ ...data, [e.target.name]: [e.target.value] })
    ]
    const handleSubmit = (event) => {
        event.preventDefault()       
        console.log(data.useremail[0])
    }
    return (
        <div>
            <div className="container d-flex justify-content-center">
                <main className="form-signin w-50 h-50">
                    <form className='justify-content-center' onSubmit={handleSubmit}>
                        <h1 className="h3 mb-3 fw-normal text-center mt-5">Please sign in</h1>
                        <div className="form-floating mt-5 ">
                            <input type="email"  name="useremail" value={useremail}  onChange={handlechange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mt-5 ">
                            <input type="password" name='password' value={password} onChange={handlechange} className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3 mt-4">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2021-2022</p>
                    </form>
                </main>
            </div>

        </div>
    )
}

export default Login