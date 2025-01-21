import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="container">
      <h2 className="text-bg-primary font-poppins-bold">Header</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/shop"}>Shop</NavLink>
    </div>
  )
}

export default Header