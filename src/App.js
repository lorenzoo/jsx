import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import CartContextProvider from './Context/CartContext'



function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={<h1>error 404: Elemento No Encontrado</h1>}
          />

          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
