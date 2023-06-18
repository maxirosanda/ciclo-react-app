import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Counter from './pages/Counter'
import Otro from './pages/Otro'
import Navegador from './components/Navegador'
import NotFoundPage from './pages/NotFoundPage'

function App() {


  return (
    <BrowserRouter> 
      <Navegador/>
      <Routes>
        <Route path='/' element={<Counter/>}></Route>
        <Route path='/otro/:id' element={<Otro/>}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    
    </BrowserRouter>

  )
}

export default App
