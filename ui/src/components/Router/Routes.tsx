import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Signup from "../LoginForms/Signup";
import Login from "../LoginForms/Login";

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "signup", element: <Signup />},
    {path: "login", element: <Login />},
    {path: "test", element: <p>TESTING</p>}
])