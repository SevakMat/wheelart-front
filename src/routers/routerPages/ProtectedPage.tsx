import HomePage from "../../pages/HomePage";
import SingleRimPage from "../../pages/SingleRimPage";
import RimsPage from "../../pages/RimsPage";
import ProtectedRoute from "../types/ProtectedRoute";
import ShopBasketPage from "../../pages/ShopBasketPage";
import TiresPage from "../../pages/TiresPage";
import SingleTirePage from "../../pages/SingleTirePage";
import AccsPage from "../../pages/AccsPage";
import SingleAccsPage from "../../pages/SingleAccsPage";
import UserAccountPage from "../../pages/UserAccountPage";
import OrdersPage from "../../pages/OrdersPage";
import ContactUsPage from "../../pages/ContactUsPage";
import CvgPage from "../../pages/CvgPage";
import WhoAreWePage from "../../pages/WhoAreWePage";
import WarrantyPage from "../../pages/WarrantyPage";
import RefundPage from "../../pages/RefundPage";
import LegalNoticePage from "../../pages/LegalNoticePage";
import TermsOfUsePage from "../../pages/TermsOfUsePage";
import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage";
import FaqPage from "../../pages/FAQPage";
import PaymentPage from "../../pages/PaymentPage";

const ProtectedPageRoute: ProtectedRoute = {
  isPrivate: true,
  routerProps: [
    {
      path: "/me",
      element: <UserAccountPage />,
    },
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
      path: "/orders",
      element: <OrdersPage />,
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
    {
      path: "/who-are-we",
      element: <WhoAreWePage />,
    },
    {
      path: "/warranty",
      element: <WarrantyPage />,
    },
    {
      path: "/refund-policy",
      element: <RefundPage />,
    },
    {
      path: "/legal-notice",
      element: <LegalNoticePage />,
    },
    {
      path: "/terms-of-use",
      element: <TermsOfUsePage />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicyPage />,
    },
    {
      path: "/user/payment",
      element: <PaymentPage />,
    },
  ],
};

export default ProtectedPageRoute;
