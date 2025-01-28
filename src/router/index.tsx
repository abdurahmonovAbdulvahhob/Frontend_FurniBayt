import { lazy } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SuspenseContainer } from "@/config";

const Home = lazy(() => import("@/pages/home/Home"));
const Shop = lazy(() => import("@/pages/shop/Shop"));
const About = lazy(() => import("@/pages/about/About"));
const Contact = lazy(() => import("@/pages/contact/Contact"));
const SignUp = lazy(() => import("@/pages/auth/sign-up/SignUp"));
const Otp = lazy(() => import("@/pages/auth/otp/Otp"));
const Profile = lazy(() => import("@/pages/auth/profile/Profile"));
const Search = lazy(() => import("@/components/search/Search"));
const Wishlist = lazy(() => import("@/pages/wishlist/Wishlist"));
const Cart = lazy(() => import("@/pages/cart/Cart"));
const ProductDetail = lazy(() => import("@/pages/product_detail/Product_detail"));
const Layout = lazy(() => import("@/pages/layout/Layout"));
const NotFound = lazy(() => import("@/pages/not-found/NotFound"));

const Routers = () => {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <SuspenseContainer>
          <Layout />
        </SuspenseContainer>
      ),
      children: [
        { path: "/", element: <SuspenseContainer><Home /></SuspenseContainer> },
        { path: "/shop", element: <SuspenseContainer><Shop /></SuspenseContainer> },
        { path: "/product/:id", element: <SuspenseContainer><ProductDetail /></SuspenseContainer> },
        { path: "/about", element: <SuspenseContainer><About /></SuspenseContainer> },
        { path: "/contact", element: <SuspenseContainer><Contact /></SuspenseContainer> },
        { path: "/search", element: <SuspenseContainer><Search /></SuspenseContainer> },
        { path: "/wishlist", element: <SuspenseContainer><Wishlist /></SuspenseContainer> },
        { path: "/cart", element: <SuspenseContainer><Cart /></SuspenseContainer> },
      ],
    },
    // Auth sahifalari Layout'dan tashqarida yuklanadi
    {
      path: "/auth",
      children: [
        {
          path: "sign-up",
          element: (
            <SuspenseContainer>
              <SignUp />
            </SuspenseContainer>
          ),
        },
        {
          path: "otp",
          element: (
            <SuspenseContainer>
              <Otp />
            </SuspenseContainer>
          ),
        },
        {
          path: "profile",
          element: (
            <SuspenseContainer>
              <Profile />
            </SuspenseContainer>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <SuspenseContainer>
          <NotFound />
        </SuspenseContainer>
      ),
    },
  ]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        {routes}
      </motion.div>
    </AnimatePresence>
  );
};

export default Routers;
