import HomePage from "../../pages/HomePage"
import ProtectedRoute from "../types/ProtectedRoute"



const ProtectedPageRoute: ProtectedRoute = {
    isPrivate: true,
    routerProps: [
        {
            path: "/home",
            element: <HomePage />,
        }
    ]
}



export default ProtectedPageRoute