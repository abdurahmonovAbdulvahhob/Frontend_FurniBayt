import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { links } from "../../static";
import logo from "@/assets/logo/logo1-removebg-preview.png"; // To'g'ri manba
import useOnlineStatus from "@/hooks/useOnlineStatus"; // Internet statusini tekshiruvchi hook
import HeaderSearch from "./HeaderSearch";
import "./Header.scss";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { online, firstEnter } = useOnlineStatus(); // `useOnlineStatus` hook ishlatilmoqda
  const token = useSelector((state: RootState) => state.token.access_token); // Token Redux'dan olinmoqda
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <header
      className={`bg-white w-full shadow-md sticky left-0 z-50 transition-all duration-300 ${
        !online && firstEnter ? "top-6" : "top-0"
      } ${online && firstEnter ? "header-animate" : ""}`}
    >
      <div className="container mx-auto h-20 flex justify-between items-center font-poppins max-[520px]:justify-center">
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

        {/* Navigation Links */}
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
        <div className="flex items-center gap-6 text-xl">
          {/* User Icon */}
          <NavLink to={token ? "/auth/profile" : "/auth/sign-up"}>
            <LuUser className="h-6 w-6 hover:text-bg-primary duration-100" />
          </NavLink>

          {/* Search Icon */}
          <FiSearch
            className="h-6 w-6 cursor-pointer hover:text-bg-primary duration-100"
            onClick={() => setSearchOpen(true)}
          />

          {/* Wishlist Icon */}
          <NavLink to="/wishlist">
            <AiOutlineHeart className="h-6 w-6 hover:text-bg-primary duration-100" />
          </NavLink>

          {/* Cart Icon */}
          <NavLink to="/cart">
            <AiOutlineShoppingCart className="h-6 w-6 hover:text-bg-primary duration-100" />
          </NavLink>
        </div>
      </div>

      {/* Search Component */}
      <HeaderSearch setSearchOpen={setSearchOpen} searchOpen={searchOpen} />

      {/* Internet Status Alert */}
      {!online && (
        <div className="bg-red-500 text-white text-center py-2">
          You are offline. Some features may not be available.
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
