import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
      <nav className="flex flex-col gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
          }
        >
          User
        </NavLink>
      </nav>
  )
}

export default Navbar