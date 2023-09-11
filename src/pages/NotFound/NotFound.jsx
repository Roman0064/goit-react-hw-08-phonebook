import { HOME_PAGE_ROUTE } from 'constants/routes';
import React from 'react'
import { Link } from 'react-router-dom';
import css from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={css.wrapper}>
        <span>Error 404. Sorry, page wasn't found. </span>
        <Link to={HOME_PAGE_ROUTE} className={css.back}>Back to the Home page.</Link>
    </div>
  )
}

export default NotFound;