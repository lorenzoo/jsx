// import Component from 'react'
// import ConsumiendoApis from './Components/ConsumiendoApis/ConsumiendoApis'
// import Contadores from './Components/Contadores/Contadores'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'
// import ProductCard from './Components/ProductCard/ProductCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>error 404: Elemento No Encontrado</h1>} />
        {/*<Route path="/Camisetas" element={<h1>CAMISETAS</h1>} />
        <Route path="/Sudaderas" element={<h1>SUDADERAS</h1>} />
        <Route path="/Pantalones" element={<h1>PANTALONES</h1>} />
        <Route path="/Accesorios" element={<h1>ACCESORIOS</h1>} />*/}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        {/*<ItemListContainer />
      {/*<ProductCard title="Camiseta" price={34} />
      <ProductCard title="Pantalon" price={50} />
  <ProductCard title="Sudadera" price={80} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
