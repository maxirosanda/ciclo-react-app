import {BrowserRouter,Routes,Route , Navigate} from 'react-router-dom'
import CounterController from './pages/Counter/index.controller'
import OtroController from './pages/Otro/index.controller'
import NotFoundPageController from './pages/NotFoundPage/index.controller'
import NavegadorController from './components/Navegador/index.controller'

function App() {
  return (
    <BrowserRouter> 
      <NavegadorController/>
      <Routes>
        <Route path='/' element={<CounterController/>}></Route>
        <Route path='/otro/:id' element={<OtroController/>}></Route>
        <Route path='/otro2' element={<Navigate to="/otro/12"/>} ></Route>
        <Route path="*" element={<NotFoundPageController />} />
    
      </Routes>
    
    </BrowserRouter>

  )
}

export default App
