import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import SingleRimPage from "../../pages/SingleRimPage";
import RimsPage from "../../pages/RimsPage";
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
      element: <SearchPage />,
    },
    {
      path: "/rims",
      element: <RimsPage />,
    },
    {
      path: "/rims/:id",
      element: <SingleRimPage />,
    },
  ],
};

export default ProtectedPageRoute;
