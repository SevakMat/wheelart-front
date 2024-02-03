import HomePage from "../../pages/HomePage";
import SingleRimPage from "../../pages/SingleRimPage";
import RimsPage from "../../pages/RimsPage";
import ProtectedRoute from "../types/ProtectedRoute";
import TiresPage from "../../pages/TiresPage";
import SingleTirePage from "../../pages/SingleTirePage";

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
      path: "/rims",
      element: <RimsPage />,
    },
    {
      path: "/rims/:id",
      element: <SingleRimPage />,
    },
    {
      path: "/tires",
      element: <TiresPage />,
    },
    {
      path: "/tires/:id",
      element: <SingleTirePage />,
    },
  ],
};

export default ProtectedPageRoute;
