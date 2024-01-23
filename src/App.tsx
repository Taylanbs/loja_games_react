import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';

import CategoriaList from './components/categorias/CategoriaList/categoriaList';
import DeletarCategoria from './components/categorias/DeletarCategoria/deletarCategoria';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/categoria" element={< CategoriaList />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;