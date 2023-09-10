import { NavLink, Route, Routes } from 'react-router-dom';
import { CONTACTS_PAGE_ROUTE, HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, appRoutes } from 'constants/routes';
import css from './App.module.css';
import NotFound from 'pages/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAuthentication } from 'redux/authReducer';
import { LogOut } from 'components/userMenu';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';

const App = () => {
  const authenticated = useSelector(selectUserAuthentication);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  },[dispatch]);

    return (
      <div className={css.wrapper}>
        <header className={css.header}>
          <nav className={css.nav}>
            <NavLink to={HOME_PAGE_ROUTE} className={css.home}>Home</NavLink>
            
            {authenticated ? (
              <>
                <NavLink to={CONTACTS_PAGE_ROUTE}>Contacts</NavLink>
                <LogOut/>
              </>
            ):(
              <>
                <NavLink to={LOGIN_PAGE_ROUTE}>Login</NavLink>
                <NavLink to={REGISTER_PAGE_ROUTE}>Register</NavLink>
              </>
            )}
          </nav>
        </header>
        <main>
          <Routes>
            {appRoutes.map(({path, element}) => <Route key={path} path={path} element={element} />)}
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </main>
      </div>
  );
};
export default App;