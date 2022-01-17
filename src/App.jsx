import Header from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Basket from './pages/Basket'
import Categories from './pages/Categories'
import ProductDetail from './pages/Product-detail'
import ProductsPage from './pages/Products'
import CategoryDetail from './pages/CategoryDetail'
import { useState } from 'react'
import NotFound from './pages/NotFound'

function App() {

  const [items, setItems] = useState([])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate replace to='/products' />} />
          <Route path='/products' element={<ProductsPage items={items} setItems={setItems} />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/categories/:id' element={<CategoryDetail items={items} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
