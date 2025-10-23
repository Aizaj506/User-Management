import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-col gap-3 max-w-60 mx-auto p-2'>
      <NavLink to="/" className="hover:border rounded-md text-center">Home</NavLink>
      <NavLink to="/user" className="hover:border rounded-md text-center">User</NavLink>
    </div>
  )
}

export default Navbar
