import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = ({ id, images, category: { name }, title, price, description }) => {
  const context = useContext(ShoppingCartContext)
  const showProduct = (dataProduct) => {
    context.openProductDetail()
    context.setProductDetailShow(dataProduct)
  }

  const addProductToCart = (event, dataProduct) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, dataProduct])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center content-center bg-black w-6 h-6 rounded-full m-2 px-3 py-0.5'
        >
          <CheckIcon className='absolute h-6 w-6 text-white' />
        </div>
      )
    } else {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center content-center bg-white w-6 h-6 rounded-full m-2 px-3 py-0.5'
          onClick={(event) => addProductToCart(event, { id, images, category: { name }, title, price, description })}
        >
          <PlusIcon className='absolute h-6 w-6 text-black' />
        </div>
      )
    }
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct({ id, images, category: { name }, title, price, description })}
      >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-0.5'>{name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={images[2]} alt='headphones' />
        {renderIcon(id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-lg font-medium'>{`$${price}`}</span>
      </p>
    </div>
  )
}

export default Card
