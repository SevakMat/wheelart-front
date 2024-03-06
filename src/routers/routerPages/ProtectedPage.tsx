import HomePage from "../../pages/HomePage";
import SingleRimPage from "../../pages/SingleRimPage";
import RimsPage from "../../pages/RimsPage";
import ProtectedRoute from "../types/ProtectedRoute";
import ShopBasketPage from "../../pages/ShopBasketPage";
import TiresPage from "../../pages/TiresPage";
import SingleTirePage from "../../pages/SingleTirePage";
import AccsPage from "../../pages/AccsPage";
import SingleAccsPage from "../../pages/SingleAccsPage";
import ContactUsPage from "../../pages/ContactUsPage";
import FaqPage from "../../pages/FaqPage";
import CvgPage from "../../pages/CvgPage";

const ProtectedPageRoute: ProtectedRoute = {
  isPrivate: true,
  routerProps: [
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/accessories",
      element: <AccsPage />,
    },
    {
      path: "/accessories/:id",
      element: <SingleAccsPage />,
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
      path: "/shop-basket",
      element: <ShopBasketPage />,
    },
    {
      path: "/tires",
      element: <TiresPage />,
    },
    {
      path: "/tires/:id",
      element: <SingleTirePage />,
    },
    {
      path: "/contact",
      element: <ContactUsPage />,
    },
    {
      path: "/faq",
      element: <FaqPage />,
    },
    {
      path: "/genral-terms-conditions",
      element: <CvgPage />,
    },
  ],
};

export default ProtectedPageRoute;
