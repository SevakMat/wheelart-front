import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";

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
        {
            path: "/search",
            element: <SearchPage />
        },
    ],
};

export default ProtectedPageRoute;
