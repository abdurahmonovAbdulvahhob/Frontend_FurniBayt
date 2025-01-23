import logo from "@/assets/svgs/logo.svg";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../../static";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white w-full shadow-md sticky top-0 left-0 z-10">
      <div className="container mx-auto h-20 flex justify-between items-center font-poppins ">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center hover:opacity-70 duration-300 cursor-pointer space-x-2"
        >
          <img src={logo} alt="logo" className="h-8 w-auto opacity-100" />
          <h2 className="ml-1 font-montserrat text-3xl font-bold text-gray-800">
            Furnibayt
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-12 max-[986px]:hidden opacity-100">
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
        <div className="flex items-center gap-6 text-xl opacity-100">
          <NavLink to="/auth">
            <LuUser className="h-6 w-6 hover:text-bg-primary duration-100" />
          </NavLink>
          <FiSearch
            className="h-6 w-6 cursor-pointer hover:text-bg-primary duration-100"
            onClick={() => navigate("/search")}
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
  );
};

export default React.memo(Header);
