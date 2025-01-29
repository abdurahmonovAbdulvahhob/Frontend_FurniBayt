import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { links } from "../../static";
import logo from "@/assets/logo/logo1-removebg-preview.png";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import HeaderSearch from "./HeaderSearch";
import HeaderSkeleton from "../../skleton/HeaderSkeleton/HeaderSkeleton";
// import Search from "../search/Search";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { online, firstEnter } = useOnlineStatus();
  const token = useSelector((state: RootState) => state.token.access_token);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 500); 
  }, []);

  if (isLoading) {
    return <>
    <HeaderSkeleton />
    </>
  }

  return (
    <>
      {/* Top Header for Desktop and Mobile */}
      <header
        className={`
          lg:flex sticky z-50 bg-white shadow-md 
          transition-all duration-300
          ${!online && firstEnter ? "top-6" : "top-0"}
        `}
      >
        <div className="container mx-auto h-20 flex justify-between items-center font-poppins px-4 lg:px-0">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center duration-300 cursor-pointer space-x-2"
          >
            <img
              src={logo}
              alt="Furnibayt Logo"
              className="h-10 w-auto opacity-100"
            />
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="flex items-center gap-8 max-[986px]:hidden">
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
          <div className="flex items-center gap-6 text-xl max-[986px]:hidden">
            <NavLink to={token ? "/auth/profile" : "/auth/sign-up"}>
              <LuUser className="h-6 w-6 hover:text-bg-primary duration-100" />
            </NavLink>
            <FiSearch
              className="h-6 w-6 cursor-pointer hover:text-bg-primary duration-100"
              onClick={() => setSearchOpen(true)}
            />
            <NavLink to="/wishlist">
              <AiOutlineHeart className="h-6 w-6 hover:text-bg-primary duration-100" />
            </NavLink>
            <NavLink to="/cart">
              <AiOutlineShoppingCart className="h-6 w-6 hover:text-bg-primary duration-100" />
            </NavLink>
          </div>
        </div>
      </header>

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

        <NavLink
          to={token ? "/auth/profile" : "/auth/sign-up"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-bg-primary" : "text-gray-600"
            }`
          }
        >
          <LuUser className="text-2xl" />
          <span className="text-xs mt-1">Profile</span>
        </NavLink>
      </nav>

      {/* Search Component */}
      {/* <Search setSearchOpen={setSearchOpen} searchOpen={searchOpen} /> */}
      <HeaderSearch setSearchOpen={setSearchOpen} searchOpen={searchOpen} />

      {/* Internet Status Alert */}
      {!online && (
        <div className="bg-red-500 text-white text-center py-2">
          You are offline. Some features may not be available.
        </div>
      )}
    </>
  );
};

export default React.memo(Header);