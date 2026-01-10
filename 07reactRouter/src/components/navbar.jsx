import React from 'react'
import logo from '../assets/logo.png'
import { NavLink ,replace,useNavigate} from 'react-router-dom'
function navbar() {
  const navlinkclass = ({ isActive }) =>
    isActive ? "text-red-500 font-semibold" : "text-gray-500";
  const navigate=useNavigate();
  return (

    <div className='flex items-center justify-center  justify-evenly '>
        <img className='h-20' src={logo} alt="" srcset="" />
        <ul className='flex items-center justify-center gap-4 shadow-lg rounded-b-md p-3

    '>
           <NavLink to="/" className={navlinkclass}> <li>Home</li></NavLink>
            <NavLink to="/products" className={navlinkclass}><li>Products</li></NavLink>
           <NavLink to="/contact" className={navlinkclass}> <li>Contact</li></NavLink>
            <NavLink to="/about" className={navlinkclass}><li>About </li></NavLink>
            
        </ul>
        <button className='bg-black text-white rounded-lg p-2 hover:bg-black/80 '
        onClick={()=>navigate('/about',{replace:true})}
        >LogIn</button>
    </div>
  )
}

export default navbar