import css from './App.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Contacts from 'pages/Contacts';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

const App = () => {
    return (
      <div className={css.wrapper}>
        <header>
          <nav>
            <NavLink to='/'>HomePage</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={HomePage}></Route>
            <Route path='/contacts' element={Contacts}></Route>
            <Route path='/register' element={RegisterPage}></Route>
            <Route path='/login' element={LoginPage}></Route>
          </Routes>
        </main>
      </div>
  );
};
export default App;