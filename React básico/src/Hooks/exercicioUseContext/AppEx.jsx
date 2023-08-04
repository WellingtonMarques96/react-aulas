import React from 'react'; 
import Produto from './ProdutoEx';
import {GlobalStorage} from './GlobalContextEx'; 
import Limpar from './Limpar';

const App = () => {

   return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
   );
};

export default App;