import React from 'react'

const Login = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className='card col-md-4 col-10 offset-1 offset-md-4 mt-5 bg-light'>
                    <form action="">
                        <label htmlFor="email" className='form-label mt-4'>Email Address</label>
                        <input type="text" placeholder='your@mail.com' id='email' className='form-control'/>
                        <label htmlFor="password" className='form-label mt-4'>Password</label>
                        <input type="text" placeholder='min 8 chars' id='password' className='form-control'/>
                        <button className='btn btn-warning mt-md-4 mt-5 mb-4 col-md-6 offset-md-3 col-12'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Login
