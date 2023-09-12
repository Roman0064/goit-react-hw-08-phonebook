import React from 'react';
import css from './HomePage.module.css';
import myImage from 'phonebook.png';

const HomePage = () => {
  return (
    <div className={css.home}>
      <h1 className={css.title}>Welcome to the PhoneBook</h1>
      <img src={myImage} alt="Phonebook" className={css.img}/>
    </div>
  );
}

export default HomePage;
