import React from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';
import css from './LoginPage.module.css'

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email, 
      password,
    };

    dispatch(loginUser(formData));
  };
  return (
    <div className={css.login_wrapper}>
        <h1 className={css.title}>Login</h1>
        <form onSubmit={handleSubmit} className={css.login_form}>
          <label className={css.label}>
            <span>Email</span>
            <input 
              type="email" 
              name='userEmail' 
              placeholder='Enter your email...' 
              required
              className={css.input}
            />
          </label>
          <label className={css.label}>
            <span>Password</span>
            <input 
              type="password" 
              name='userPassword' 
              placeholder='Enter your password...'
              minLength={7} 
              required
              className={css.input}
            />
          </label>
          <button type='submit' className={css.btn}>Login</button>
        </form>
    </div>
  )
}

export default LoginPage