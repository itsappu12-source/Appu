import React from 'react'

const Reg = () => {
  return (
    <div>
      <h1>Welcome to registration page</h1>
      <br />
      <input type="text" placeholder='name'className='border p-2 rounded w-80' />
      <br /><br />
      <input type="text" placeholder='place ' className='border p-2 rounded w-80'/>
      <br /><br />
      <input type="number"placeholder='age' className='border p-2 rounded w-80'/>
      <br /><br />
      <input type="password"placeholder='password'className='border p-2 rounded w-80' />
      <br /><br />
      <button className='bg-blue-500 text-white px-4 py-2 rounded'>Register</button>
    </div>
  )
}

export default Reg
