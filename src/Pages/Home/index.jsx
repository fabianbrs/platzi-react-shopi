import { useContext } from 'react'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'
import AllCard from '../../Constants/Home'
import { ShoppingCartContext } from '../../Context'

function Home () {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='mb-4'>
        <h1 className='font-medium text-lg'>Exclusive Products</h1>
      </div>
      <input
        className='rounded-lg border border-gray-300 w-80 p-4 mb-4 text-center focus:outline-none'
        type='text'
        placeholder='Search a product'
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <AllCard />
      <ProductDetail />
    </Layout>
  )
}

export default Home
