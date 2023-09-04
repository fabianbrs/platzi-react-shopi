import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'><NavLink to='/'>Shopi</NavLink></li>
        <li><NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>All</NavLink></li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory('clothes')}
            to='/clothes'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory('electronics')}
            to='/electronics'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory('furniture')}
            to='/furniture'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory('shoes')}
            to='/shoes'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory('other')}
            to='/other'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>tef@platzi.com</li>
        <li><NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>My Orders</NavLink></li>
        <li><NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>My Account</NavLink></li>
        <li><NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>Sign In</NavLink></li>
        <li className='flex items-center'>
          <ShoppingBagIcon className='h-6 w-6 text-black' />
          <div className='pl-1'>
            {context.count}
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
