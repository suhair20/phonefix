import { userSlice } from "../../slices/userSlice";
import { logout, setauthenticated } from "../slices/AuthSlice";

export const checkAuthOnLoad = async (dispatch) => {
  try {
    const result = await dispatch(
      userSlice.endpoints.checkAuth.initiate()
    ).unwrap();

    dispatch(setauthenticated(result.user));
  } catch (error) {
    console.log(error);
    
    dispatch(logout());
  }
};

