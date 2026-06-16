import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Welcome to login page</h1>
      <input type="text" placeholder='username'/>
      <br /><br />
      <input type='password' placeholder='password'/>
      <br /><br />
      <button>Login</button>
        <h1 className='text-2xl font-bold mb-6 ' >Welcome to login page</h1>
      <input type="text" placeholder='username' className='border'/>
      <br /><br />
      <input type='password' placeholder='password'className='border'/>
      <br /><br />
      <button>Login</button>
      <br /><br />
    </div>
  )
}

export default Login
