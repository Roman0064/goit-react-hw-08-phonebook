import { HOME_PAGE_ROUTE } from "constants/routes";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserAuthentication } from "redux/authReducer";


export const RestrictedRoute = ({ children, redirectTo = HOME_PAGE_ROUTE}) => {
    const authenticated = useSelector(selectUserAuthentication);
    return authenticated ? <Navigate to={redirectTo} replace/> : children;
};