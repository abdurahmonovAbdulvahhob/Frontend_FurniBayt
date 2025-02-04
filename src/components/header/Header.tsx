import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineHome,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import HeaderSearch from "./HeaderSearch";
import HeaderSkeleton from "../../skleton/HeaderSkeleton/HeaderSkeleton";
import logo from "@/assets/logo/logo1-removebg-preview.png";
import { links } from "../../static";
import { useCheckTokenQuery } from "../../redux/api/customer-api";
import { useGetWishlistQuery } from "../../redux/api/wishlist-api";
import { useOutsideClick } from "../../hooks/useOutsideClick";


const Header: React.FC = () => {
  const navigate = useNavigate();
  const { online, firstEnter } = useOnlineStatus();
  const token = useSelector((state: RootState) => state.token.access_token);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const { data, isSuccess } = useCheckTokenQuery(null, {
    skip: Boolean(!token),
  });

  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const cart = useSelector((state: RootState) => state.cart.value);

  const { data: wishlistData } = useGetWishlistQuery(
    String(data?.clientId?.id), 
    { skip: Boolean(!data) }
  );

  const totalWishlist = wishlistData
    ? wishlistData?.data?.products?.length
    : wishlist?.length
    ? wishlist?.length
    : 0;

  const cartTotal = cart?.length || 0;

   const handleClear = () => {
     setMenuOpen(false);
   };
   const ref = useOutsideClick(handleClear);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  const isMobile = window.innerWidth <= 1024;

  if (isLoading && !isMobile) {
    return <HeaderSkeleton />;
  }

  return (
    <div
      className={`bg-white dark:bg-zinc-950 w-full shadow-sm sticky left-0 z-50 transition-colors duration-300 ${
        !online && firstEnter ? "top-6" : "top-0"
      } ${online && firstEnter ? "header-animete" : ""}`}
    >
      {/* Top Header for Desktop and Mobile */}
      <header
        className={`
          hidden lg:flex fixed w-full z-50 bg-white shadow-md 
          transition-all duration-300 
          ${!online && firstEnter ? "top-6" : "top-0"}
        `}
        style={{ height: "80px" }}
      >
        <div className="container mx-auto h-20 flex justify-between items-center font-poppins px-4 lg:px-0">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center duration-300 cursor-pointer space-x-2"
          >
            <img
              src={logo}
              alt="Furnishings Logo"
              className="h-10 w-auto opacity-100"
            />
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "font-medium border-b-2 border-bg-primary text-bg-primary duration-100"
                    : "text-gray-600 hover:text-bg-primary"
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-6 text-xl">
            <NavLink to={token ? "/auth/profile/self" : "/auth/sign-in"}>
              {isSuccess ? (
                <div className="w-8 h-8 bg-bg-primary max-[986px]:hidden rounded-full flex items-center justify-center text-white uppercase">
                  {data?.customer?.first_name?.trim()?.slice(0, 1)}
                </div>
              ) : (
                <LuUser className="h-6 w-6 hover:text-bg-primary duration-200 max-[986px]:hidden" />
              )}
            </NavLink>
            <FiSearch
              className="h-6 w-6 cursor-pointer hover:text-bg-primary duration-100"
              onClick={() => setSearchOpen(true)}
            />
            <NavLink to={"/wishlist"} className="relative ">
              <AiOutlineHeart className="h-6 w-6 hover:text-bg-primary duration-200 max-[986px]:hidden" />
              {!!totalWishlist && (
                <span className="absolute max-[986px]:hidden top-[-5px] right-[-5px] bg-bg-primary  w-4 rounded-full text-white flex items-center justify-center text-[12px] h-4">
                  {totalWishlist}
                </span>
              )}
            </NavLink>
            <NavLink to={"/cart"} className={"relative"}>
              {!!cartTotal && (
                <span className="absolute max-[986px]:hidden top-[-5px] right-[-5px] bg-bg-primary  w-4 rounded-full text-white flex items-center justify-center text-[12px] h-4">
                  {cartTotal}
                </span>
              )}
              <AiOutlineShoppingCart className="h-6 w-6 hover:text-bg-primary duration-200 max-[986px]:hidden" />
            </NavLink>
          </div>
        </div>
      </header>

      {/* Sahifa kontentiga padding qo'shish */}
      <div className="pt-20 lg:pt-[80px]">
        {/* 80px bu headerning balandligi */}

        {/* Sahifa kontentini shu yerda joylashtirasiz */}
      </div>

      {/* Bottom Navigation for Mobile */}
      <nav
        className="
          lg:hidden fixed bottom-0 left-0 w-full bg-white 
          shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50 
          flex justify-around items-center h-16
        "
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-bg-primary" : "text-gray-600"
            }`
          }
        >
          <AiOutlineHome className="text-2xl" />
          <span className="text-xs mt-1">Home</span>
        </NavLink>

        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-bg-primary" : "text-gray-600"
            }`
          }
        >
          <AiOutlineHeart className="text-2xl" />
          <span className="text-xs mt-1">Wishlist</span>
        </NavLink>

        <div
          onClick={() => setSearchOpen(true)}
          className="flex flex-col items-center text-gray-600 cursor-pointer"
        >
          <FiSearch className="text-2xl" />
          <span className="text-xs mt-1">Search</span>
        </div>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-bg-primary" : "text-gray-600"
            }`
          }
        >
          <AiOutlineShoppingCart className="text-2xl" />
          <span className="text-xs mt-1">Cart</span>
        </NavLink>

        <NavLink to={token ? "/auth/profile/self" : "/auth/sign-in"}>
          {isSuccess ? (
            <div className="w-8 h-8 bg-bg-primary max-[986px]:hidden rounded-full flex items-center justify-center text-white uppercase">
              {data?.customer?.first_name?.trim()?.slice(0, 1)}
            </div>
          ) : (
            <LuUser className="h-6 w-6 hover:text-bg-primary duration-200 max-[986px]:hidden" />
          )}
        </NavLink>
      </nav>

      {/* Search Component */}
      <HeaderSearch setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
      <div
        ref={ref}
        className={`absolute w-full bg-white dark:bg-black shadow-md z-50 transition-all duration-500 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center items-center py-4 gap-4">
          <div className="w-full border-b grid place-items-center pb-3">
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-bg-primary duration-200"
            >
              About
            </NavLink>
          </div>
          <div className="w-full border-b grid place-items-center pb-3">
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-bg-primary duration-200"
            >
              Contact
            </NavLink>
          </div>
          <div className="w-full grid place-items-center">
            <NavLink
              to="/auth/profile/self"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-bg-primary duration-200"
            >
              Profile
            </NavLink>
          </div>
        </div>
      </div>
      {/* Internet Status Alert */}
      {!online && (
        <div className="bg-red-500 text-white text-center py-2">
          You are offline. Some features may not be available.
        </div>
      )}
    </div>
  );
};

export default React.memo(Header);
