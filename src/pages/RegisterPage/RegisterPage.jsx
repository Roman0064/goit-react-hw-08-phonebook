import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/operations';
import css from './RegisterPage.module.css'
import Notiflix from 'notiflix';
import { selectError } from 'redux/selectors';
Notiflix.Notify.init({
  position: 'center-top',
  });


const RegisterPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  console.log(error)

  if(error){
    Notiflix.Notify.warning('A user with this email already exists')
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name, 
      email, 
      password,
    };

    dispatch(registerUser(formData));
  };
  return (
    <div className={css.register_wrapper}>
        <h1 className={css.title}>Register</h1>
        <form onSubmit={handleSubmit} className={css.register_form}>
          <label className={css.label}>
            <span>Username</span>
            <input 
              type="text" 
              name='userName' 
              placeholder='Enter your name...' 
              required
              className={css.input}
            />
          </label>
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
          <button type='submit' className={css.btn}>Register</button>
        </form>
    </div>
  )
}

export default RegisterPage