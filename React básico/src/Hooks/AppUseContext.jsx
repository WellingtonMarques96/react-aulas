import React from 'react'; 
import Produto from './Produto1';
import {GlobalStorage} from './GlobalContext'; //sendo importado dessa forma, porque não foi exportado com o default

const App = () => {

   return ( //sempre que abrir e fechar o componente dessa forma abaixo, ele tem a propriedade children, tudo que tiver dentro será considerado children
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
   );
};

export default App;