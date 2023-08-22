import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Menu } from './components/Menu';
import { PageCss } from './pages/PageCss';
function App() {

  return (
    <div>
      <h1>React Router</h1>
      {/* <ul>
        <li>
          <a href="/">Home</a>
          
        </li>
        <li>
          <a href="/javascript">JavaScript</a>
        </li>
        <li>
          <a href="/css">CSS</a>
        </li>
        <li>
          <a href="/react">React</a>
        </li>
      </ul> */}
      <BrowserRouter>
      {/* Link hace que las rutas sean mas optimas, en vez de usar la etiqueta <a></a> */}
      {/* Component Menu tiene los link  */}
      {/* Para mejor estructuracion del codigo */}
      {/* Un componente es como una pieza de lego que se puede encajar en cualquier cosa */}
      {/* Pages nos mostrara todo una pagina */}
      {/* Pages se puede crear en la carpeta de componentes pero para mejor practicas de programacion es mejor */}
      {/* por separado. */}
        <Menu></Menu>
      
        <Routes>
          <Route  path="/" element={<h1>HOME</h1>}/>
          <Route  path="/javascript" element={<h1>JAVASCRIPT</h1>}/>
          <Route  path="/css" element={<PageCss/>}/>
          <Route  path="/react" element={<h1>REACT</h1>}/>
          <Route  path="*" element={<h1>ERROR 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
