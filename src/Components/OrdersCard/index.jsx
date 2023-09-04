import { ChevronRightIcon, CalendarDaysIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className='flex justify-between items-center mb-3 border border-gray-300 p-2 rounded-md w-80 shadow-lg'>
      <div className='flex justify-between items-center w-full'>
        <p className='flex flex-col'>
          <span className='flex items-center'>
            <CalendarDaysIcon className='h-4 w-4 text-black mr-2' />
            01.02.23
          </span>
          <span className='flex items-center'>
            <ShoppingCartIcon className='h-4 w-4 text-black mr-2' /> {totalProducts} articles
          </span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>$ {totalPrice}</span>
          <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard
