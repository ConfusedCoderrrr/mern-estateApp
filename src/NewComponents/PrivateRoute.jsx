import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const user = useSelector((state) => state.user.userData);
  console.log(user);
  return <>{user ? <Outlet /> : <Navigate to="/sign-in" />}</>;
}

export default PrivateRoute;
