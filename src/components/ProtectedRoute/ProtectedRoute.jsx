import { useSelector } from "react-redux"
import { selectAuthUser } from "../../store/authSlice"
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {
    const user = useSelector(selectAuthUser);

    if(!user) {
        return <Navigate to="/" />
    } 

    return children;
}

export default ProtectedRoute;