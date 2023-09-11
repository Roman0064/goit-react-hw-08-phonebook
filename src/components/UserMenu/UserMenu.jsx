import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "redux/authReducer";
import { logoutUser } from "redux/operations";
import css from './UserMenu.module.css'

export const LogOut = () => {
    const userData = useSelector(selectUserData)
    const dispatch = useDispatch();
  
    const handleLogout = () => {
      dispatch(logoutUser());
    };
    
    return (
      <div className={css.wrapper}>
        <p>Hello, {userData.name}</p>
        <button onClick={handleLogout} className={css.btn}>LogOut</button>
      </div>
    );
};