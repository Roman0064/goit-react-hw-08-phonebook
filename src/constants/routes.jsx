import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

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
      element: 
        <PrivateRoute>
          <Contacts/>
        </PrivateRoute>,
    },
    {
      path: LOGIN_PAGE_ROUTE,
      element: 
        <RestrictedRoute redirectTo={CONTACTS_PAGE_ROUTE}>
          <LoginPage/>
        </RestrictedRoute>,
    },
    {
      path: REGISTER_PAGE_ROUTE,
      element: 
        <RestrictedRoute redirectTo={CONTACTS_PAGE_ROUTE}>
          <RegisterPage/>
        </RestrictedRoute>,
    },
  
  ];