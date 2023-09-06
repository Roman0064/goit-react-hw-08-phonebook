import { NavLink, Route, Routes } from 'react-router-dom';
import { CONTACTS_PAGE_ROUTE, HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, appRoutes } from 'constants/routes';
import css from './App.module.css';
import NotFound from 'pages/NotFound';

const App = () => {
    return (
      <div className={css.wrapper}>
        <header>
          <nav>
            <NavLink to={HOME_PAGE_ROUTE}>HomePage</NavLink>
            <NavLink to={CONTACTS_PAGE_ROUTE}>Contacts</NavLink>
            <NavLink to={REGISTER_PAGE_ROUTE}>Register</NavLink>
            <NavLink to={LOGIN_PAGE_ROUTE}>Login</NavLink>
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