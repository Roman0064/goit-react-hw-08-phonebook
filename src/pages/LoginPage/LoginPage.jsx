import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/operations';
import css from './LoginPage.module.css'
import { selectError } from 'redux/selectors';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'center-top',
  });

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  if(error){
    Notiflix.Notify.warning('Incorrect email or password, please check and try again')
  }

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