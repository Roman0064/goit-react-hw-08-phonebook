import { HOME_PAGE_ROUTE } from 'constants/routes';
import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
        Error 404. Sorry, page wasn't found. 
        <Link to={HOME_PAGE_ROUTE}>Back to the Home page.</Link>
    </div>
  )
}

export default NotFound;