import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import RegistrationPage from "../pages/RegistrationPage";
import AuthenticationPage from "../pages/AuthenticationPage";

export const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children:[
            {path:'reg', element: <RegistrationPage/>},
            {path:'auth', element: <AuthenticationPage/>}
        ]}

]);