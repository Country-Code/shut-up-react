import { Navigate, Outlet } from "react-router-dom"
const PrivateRoute = () => {
    // local storage is used now, using global state would be better (TBD)
    const loggedIn = localStorage.getItem('loggedIn') ? true : false;
    console.log(loggedIn);
  return loggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute