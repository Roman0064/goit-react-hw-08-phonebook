import { LOGIN_PAGE_ROUTE } from "constants/routes";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserAuthentication } from "redux/authReducer";


export const PrivateRoute = ({ children, redirectTo = LOGIN_PAGE_ROUTE}) => {
    const authenticated = useSelector(selectUserAuthentication);
    return authenticated ? children : <Navigate to={redirectTo} replace/>;
};