import React from 'react'

const RegisterPage = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    console.log(name,email,password)
  };
  return (
    <div>
        <h1>RegisterPage</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Username:</span>
            <input 
              type="text" 
              name='userName' 
              placeholder='Enter your name...' 
              required
            />
          </label>
          <label>
            <span>Email:</span>
            <input 
              type="email" 
              name='userEmail' 
              placeholder='Enter your email...' 
              required
            />
          </label>
          <label>
            <span>password:</span>
            <input 
              type="password" 
              name='userPassword' 
              placeholder='Enter your password...'
              minLength={4} 
              required
            />
          </label>
          <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegisterPage