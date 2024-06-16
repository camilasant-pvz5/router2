
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pokemones from './assets/pages/Pokemones';
import Detalles from './assets/pages/Detalles';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
       <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemones' element={<Pokemones/>}/>
        <Route path='/pokemones/:name' element={<Detalles/>}/>
      </Routes>
    </>
  )
}

export default App
