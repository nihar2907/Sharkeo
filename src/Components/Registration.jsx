import React, { useState } from 'react'
import "../css/Registration.css"
const Registration = () => {


    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobileNo: "",
        password: "",
        cpassword: "",
        address: "",
        city: "",
        state: "",
    });


    const handleInput = (event) => {
        let firstname = event.target.firstname;
        let value = event.target.value;

        setUser({ ...user, [firstname]: value })


    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { firstname,
            lastname,
            email,
            mobileNo,
            password,
            cpassword,
            address,
            city,
            state, } = user

        try {
            const res = await fetch('/register', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    mobileNo,
                    password,
                    cpassword,
                    address,
                    city,
                    state,
                })
            })
            if (res.status === 400 || !res) {
                console.log(res)
                window.alert("Already used bro!")
            } else {
                window.alert("Hogaya bhai Register, ab paisa hi paisa hoga")
                console.log(firstname, lastname);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container2 border  mx-auto">
                <h2 className='text-center'>Create an account</h2>
                <form name="regForm" onSubmit={handleSubmit} action="/register" method="POST">
                    <div className="row m-3">
                        <div className="col-6">
                            <label htmlFor="fname">First name</label>
                            <input type="text" className="form-control" id="fname" name="firstname" defaultValue={user.firstname} onChange={handleInput}
                            />
                            <span id="msg"><small></small></span>

                        </div>
                        <div className="col-6">
                            <label htmlFor="lname">Last name</label>
                            <input type="text" className="form-control" id="lname" name="lastname" defaultValue={user.lastname} onChange={handleInput}
                            />
                            <span id="msg1"><small></small></span>

                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col-6">
                            <label htmlFor="fname">Mobile</label>
                            <input type="text" className="form-control" id="mno" name="mobileNo" defaultValue={user.mobileNo} onChange={handleInput}
                            />
                            <span id="msg"><small></small></span>

                        </div>
                        <div className="col-6">
                            <label htmlFor="lname">Email id</label>
                            <input type="text" className="form-control" id="email" name="email" defaultValue={user.email} onChange={handleInput}
                            />
                            <span id="msg1"><small></small></span>

                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col-6">
                            <label htmlFor="fname">State</label>
                            <input type="text" className="form-control" id="state" name="state" defaultValue={user.state} onChange={handleInput}
                            />
                            <span id="msg"><small></small></span>

                        </div>
                        <div className="col-6">
                            <label htmlFor="lname">City</label>
                            <input type="text" className="form-control" id="city" name="city" defaultValue={user.city} onChange={handleInput}
                            />
                            <span id="msg1"><small></small></span>

                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col-6">
                            <label htmlFor="fname">Password</label>
                            <input type="text" className="form-control" id="pass" name="password" defaultValue={user.password} onChange={handleInput}
                            />
                            <span id="msg"><small></small></span>

                        </div>
                        <div className="col-6">
                            <label htmlFor="lname">Confirm Password</label>
                            <input type="text" className="form-control" id="cpass" name="cpassword" defaultValue={user.cpassword} onChange={handleInput}
                            />
                            <span id="msg1"><small></small></span>

                        </div>
                    </div>

                    <div className="row m-3">
                        <div className="col-12">
                            <label htmlFor="fname">Address</label>
                            <textarea type="textarea" rows="5" className="form-control w-100" id="fname" name="address" defaultValue={user.address} onChange={handleInput}
                            />
                            <span id="msg"><small></small></span>

                        </div>
                    </div>
                    <button type='submit' className='btn btn-outline-primary mx-auto w-50 d-flex justify-content-center text-center'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Registration