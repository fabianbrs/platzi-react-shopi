import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeProductDetail()}
          />
        </div>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={context?.productDetailShow?.images[2]}
          alt="item"
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl text-green-400 mb-2'>${context.productDetailShow.price}</span>
        <span className='font-medium text-md mb-1'>{context.productDetailShow.title}</span>
        <span className='font-light text-sm mb-2'>{context.productDetailShow.description}</span>
        <span className='flex justify-between'>
          <span className='font-medium'>Category</span>
          <span className='font-light text-green-400'>{context.productDetailShow.category.name}</span>
        </span>
      </p>
    </aside>
  )
}

export default ProductDetail
