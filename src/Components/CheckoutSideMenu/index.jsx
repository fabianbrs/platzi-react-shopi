import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AllCartProductsCheckout from '../../Constants/CheckoutSideMenu'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
    context.setCount(0)
    context.closeCheckoutSideMenu()
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-68px)] top-[68px]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <AllCartProductsCheckout />
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl text-green-400'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button
            className='bg-black py-3 text-white rounded-lg w-full'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
