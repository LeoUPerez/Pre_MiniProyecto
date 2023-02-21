import './App.css'
import CrearUsuario from './Componentes/CrearUsuario.jsx'
import Home from '../src/Componentes/Home.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
      //*Renderizado de componente según el path
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/crearusuarios' element={<CrearUsuario/>}/>
            <Route path='/edit/:id' element={<CrearUsuario/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
