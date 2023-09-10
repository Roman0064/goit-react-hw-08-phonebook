import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "redux/authReducer";
import { logoutUser } from "redux/operations";


export const LogOut = () => {
    const userData = useSelector(selectUserData)
    const dispatch = useDispatch();
  
    const handleLogout = () => {
      dispatch(logoutUser());
    };
    
    return (
      <div>
        <p>Hello, {userData.name}</p>
        <button onClick={handleLogout}>LogOut</button>
      </div>
    );
};