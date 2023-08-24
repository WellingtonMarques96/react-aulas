import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Router/Home';
import Sobre from './Router/Sobre';
import Header from './Router/Header';
import Login from './Router/Login';
import Produto from './Router/Produto';
import NaoEncontrada from './Router/NaoEncontrada'

import ProdutoDescricao from './Router/ProdutoDescricao';
import ProdutoAvaliacao from './Router/ProdutoAvaliacao';
import ProdutoCustomizado from './Router/ProdutoCustomizado';


const App = () => {
  
  return ( 
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='login' element={<Login />} />
        <Route path='produto/:id/*' element={<Produto />}>
          <Route path="" element={<ProdutoDescricao />} />
          <Route path='avaliacao' element={<ProdutoAvaliacao />} />
          <Route path='customizado' element={<ProdutoCustomizado />} />
        </Route>
        <Route path='*' element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
