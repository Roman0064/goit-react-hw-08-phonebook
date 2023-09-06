import HomePage from 'pages/HomePage';
import Contacts from 'pages/Contacts';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

export const HOME_PAGE_ROUTE = '/';
export const CONTACTS_PAGE_ROUTE = '/contacts';
export const LOGIN_PAGE_ROUTE = '/login';
export const REGISTER_PAGE_ROUTE = '/register';

export const appRoutes = [
    {
      path: HOME_PAGE_ROUTE,
      element: <HomePage/>,
    },
    {
      path: CONTACTS_PAGE_ROUTE,
      element: <Contacts/>,
    },
    {
      path: LOGIN_PAGE_ROUTE,
      element: <LoginPage/>,
    },
    {
      path: REGISTER_PAGE_ROUTE,
      element: <RegisterPage/>,
    },
  
  ];