import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/page1'
import ProductsPage from './pages/page2'
import InfoPage from './pages/page3'
import Navbar from './components/nav'
// import Footer from './components/footer'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/products' element={<ProductsPage/>} />
      <Route path='/products/:id' element={<InfoPage/>} />
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
