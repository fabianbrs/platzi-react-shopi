import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'
import OrderCard from '../Components/OrderCard'

const AllCartProductsCheckout = () => {
  const context = useContext(ShoppingCartContext)
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id)
    context.setCartProducts(filteredProducts)
    context.setCount(context.count - 1)
  }
  return (
    <div className='px-6 overflow-y-auto flex-1'>
      {
        context.cartProducts?.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images[2]}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))
      }
    </div>
  )
}

export default AllCartProductsCheckout
