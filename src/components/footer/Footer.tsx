import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 py-16">
      <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-bg-primary mb-4">
            Furnibayt.
          </h2>
          <address className="text-slate-500 text-md not-italic space-y-1">
            <p className="text-[#9F9F9F] text-lg">
              400 University Drive Suite 200 Coral <br /> Gables,
            </p>
            <p className="text-[#9F9F9F]">FL 33134 USA</p>
          </address>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-500">Links</h3>
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base ${
                  isActive ? "text-gray-900 font-medium" : "text-gray-600"
                } hover:text-gray-900 hover:underline`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `text-base ${
                  isActive ? "text-gray-900 font-medium" : "text-gray-600"
                } hover:text-gray-900 hover:underline`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base ${
                  isActive ? "text-gray-900 font-medium" : "text-gray-600"
                } hover:text-gray-900 hover:underline`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-base ${
                  isActive ? "text-gray-900 font-medium" : "text-gray-600"
                } hover:text-gray-900 hover:underline`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-500">Help</h3>
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/payment-options"
              className={({ isActive }) =>
                `text-base ${
                  isActive ? "text-gray-900 font-medium" : "text-gray-600"
                } hover:text-gray-900 hover:underline`
              }
            >
              Payment Options
            </NavLink>
            <NavLink
              to="/returns"
              className={({ isActive }) =>
                `text-base ${
                  isActive ? "text-gray-900 font-medium" : "text-gray-600"
                } hover:text-gray-900 hover:underline`
              }
            >
              Returns
            </NavLink>
            <NavLink
              to="/privacy-policies"
              className={({ isActive }) =>
                `text-base ${
                  isActive ? "text-gray-900 font-medium" : "text-gray-600"
                } hover:text-gray-900 hover:underline`
              }
            >
              Privacy Policies
            </NavLink>
          </nav>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-500">
            Newsletter
          </h3>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bg-primary text-gray-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-bg-primary text-white rounded-lg hover:bg-yellow-700"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto border-t border-gray-500 py-4">
        <div className="text-left text-gray-500 text-sm">
          2025 Furnibayt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
