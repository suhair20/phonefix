import { createBrowserRouter,createRoutesFromElements,Route  } from "react-router-dom";
import App from "../App";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

const router =createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
         {UserRoutes}
         {AdminRoutes}
        </Route>
    )
)

export default router;