import { useContext } from 'react'
import Card from '../Components/Card'
import { ShoppingCartContext } from '../Context'

const AllCard = () => {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    const currentPath = window.location.pathname

    if (currentPath === '/') {
      return context.items?.map(item => (
            <Card key={item.id} {...item} />
      ))
    }

    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map(item => (
          <Card key={item.id} {...item} />
      ))
    } else {
      return <div className='text-center'>No Items Found</div>
    }
  }

  return (
    <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {renderView()}
    </div>
  )
}

export default AllCard
