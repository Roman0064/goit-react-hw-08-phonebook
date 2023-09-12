import { NavLink, Route, Routes } from 'react-router-dom';
import { CONTACTS_PAGE_ROUTE, HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, appRoutes } from 'constants/routes';
import { Suspense, lazy } from 'react';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAuthentication } from 'redux/authReducer';
import { LogOut } from 'components/UserMenu/UserMenu';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';
import Loader from 'components/Loader';

const NotFound = lazy(() => import('pages/NotFound/NotFound'));

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
            <NavLink to={HOME_PAGE_ROUTE} className={({ isActive }) =>
              isActive ? css.active : ''}>Home</NavLink>
            
            {authenticated ? (
              <>
                <NavLink to={CONTACTS_PAGE_ROUTE} className={({ isActive }) =>
              isActive ? css.active : ''}>Contacts</NavLink>
                <LogOut/>
              </>
            ):(
              <>
                <NavLink to={LOGIN_PAGE_ROUTE} className={({ isActive }) =>
              isActive ? css.active : ''}>Login</NavLink>
                <NavLink to={REGISTER_PAGE_ROUTE} className={({ isActive }) =>
              isActive ? css.active : ''}>Register</NavLink>
              </>
            )}
          </nav>
        </header>
        <main>
          <Suspense fallback={<Loader/>}>
            <Routes>
              {appRoutes.map(({path, element}) => <Route key={path} path={path} element={element} />)}
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
  );
};
export default App;