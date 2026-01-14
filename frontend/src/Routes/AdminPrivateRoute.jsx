import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(
    (state) => state.adminAuth?.isAuthenticated
  );

  return isAuthenticated
    ? children
    : <Navigate to="/admin/login" replace />;
};

export default AdminPrivateRoute;
