import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Signup from "../LoginForms/Signup";

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "signup", element: <Signup />},
    {path: "test", element: <p>TESTING</p>}
])