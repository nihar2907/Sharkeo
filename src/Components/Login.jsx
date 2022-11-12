import React from 'react'
import '../css/Login.css'
const Login = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center">
                <main className="form-signin w-50 h-50">
                    <form className='justify-content-center'>
                        {/* <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                        <h1 className="h3 mb-3 fw-normal text-center mt-5">Please sign in</h1>

                        <div className="form-floating mt-5 ">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mt-5 ">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
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