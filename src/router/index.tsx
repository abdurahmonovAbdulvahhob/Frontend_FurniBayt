import { SuspenseContainer } from "@/config"
import { lazy } from "react"
import {useRoutes} from "react-router-dom"
const Home = lazy(()=> import("@/pages/home/Home"))
const Shop = lazy(()=> import("@/pages/shop/Shop"))
const About = lazy(()=> import("@/pages/about/About"))
const Contact = lazy(() => import("@/pages/contact/Contact"));
const SignUp = lazy(() => import("@/pages/auth/sign-up/SignUp"));
import Auth from "@/pages/auth/Auth";
const Otp = lazy(() => import("@/pages/auth/otp/Otp"));
const Profile = lazy(() => import("@/pages/auth/profile/Profile"));
const Search = lazy(() => import("@/components/search/Search"));
const Wishlist = lazy(() => import("@/pages/wishlist/Wishlist"));
const Cart = lazy(() => import("@/pages/cart/Cart"));
const Layout = lazy(()=> import("@/pages/layout/Layout"))
const NotFound = lazy(()=> import("@/pages/not-found/NotFound"))

const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              path: "/",
              element: (
                <SuspenseContainer>
                  <Home />
                </SuspenseContainer>
              ),
            },
            {
              path: "/shop",
              element: (
                <SuspenseContainer>
                  <Shop />
                </SuspenseContainer>
              ),
            },
            {
              path: "/about",
              element: (
                <SuspenseContainer>
                  <About />
                </SuspenseContainer>
              ),
            },
            {
              path: "/contact",
              element: (
                <SuspenseContainer>
                  <Contact />
                </SuspenseContainer>
              ),
            },
            {
              path: "/auth",
              element: (
                <SuspenseContainer>
                  <Auth />
                </SuspenseContainer>
              ),
              children: [
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
              path: "/search",
              element: (
                <SuspenseContainer>
                  <Search />
                </SuspenseContainer>
              ),
            },
            {
              path: "/wishlist",
              element: (
                <SuspenseContainer>
                  <Wishlist />
                </SuspenseContainer>
              ),
            },
            {
              path: "/cart",
              element: (
                <SuspenseContainer>
                  <Cart />
                </SuspenseContainer>
              ),
            },
            {
              path: "*",
              element: (
                <SuspenseContainer>
                  <NotFound />
                </SuspenseContainer>
              ),
            },
          ],
        },
        {
          path: "/auth/sign-up",
          element: (
            <SuspenseContainer>
              <SignUp />
            </SuspenseContainer>
          ),
        },
        {
          path: "/auth/otp",
          element: (
            <SuspenseContainer>
              <Otp />
            </SuspenseContainer>
          ),
        },
      ])}
    </>
  );
}

export default Routers