// layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAdmincheckAuthQuery } from "../slices/AdminSlice";
import { setAdminAuthenticated, adminLogout } from "../slices/AdminAuth";
import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const dispatch = useDispatch();
   const navigate=useNavigate()

   
  const { data, error, isLoading } = useAdmincheckAuthQuery();
 

  useEffect(() => {
    console.log("layout working", data);

    // ✅ SAFE CHECK
    if (data && data.user) {
      dispatch(setAdminAuthenticated(data.user));
       
    }

    if (error) {
      dispatch(adminLogout());
      navigate("/admin/login", { replace: true });
    }
  }, [data, error, dispatch]);

  
  if (isLoading) return null;

  return <Outlet />;
};

export default AdminLayout;

