import Component from 'react'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'
import ProductCard from './Components/ProductCard/ProductCard'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ProductCard title="Camiseta" price={34} />
      <ProductCard title="Pantalon" price={50} />
      <ProductCard title="Sudadera" price={80} />

      <Footer />
    </div>
  )
}

export default App
