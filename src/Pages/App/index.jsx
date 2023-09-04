import { BrowserRouter } from 'react-router-dom'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import Navbar from '../../Components/Navbar'
import { AppRoutes } from '../../Constants/App'
import { ShoppingCartProvider } from '../../Context'
import './App.css'

function App () {
  return (

    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
