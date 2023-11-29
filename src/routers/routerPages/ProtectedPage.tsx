import HomePage from "../../pages/HomePage";
import ProtectedRoute from "../types/ProtectedRoute";

const ProtectedPageRoute: ProtectedRoute = {
  isPrivate: true,
  routerProps: [
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/accessories",
      element: <div>asd</div>,
    },
  ],
};

export default ProtectedPageRoute;
