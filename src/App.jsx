import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import { Headerzz } from './components/header';
import { Catalogg } from './components/catalog';
import { ProductPage } from './components/oneproductpage';
import { HomePage } from './Pages/HomePage';
import './App.css'

function App() {
  return (

    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/tovar/:id' element={<ProductPage/>} />
    </Routes>
  )
}

export default App
