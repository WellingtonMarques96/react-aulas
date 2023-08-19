import React from 'react';

const App = () => {
  return ( //na div abaixo tudo que está na classe já está puxando do bootstrap, e foi adicionado o style normal para o maxwidth
    <div className='card bg-dark text-white m-5' style={{maxWidth:'18rem'}}>
      <div className='card-header'>Notebook</div>
      <div className='card-body'>
        <h5 className='card-title'>R$ 2500,00</h5>
        <p className='card-text'>Esse é o notebook da empresa</p>
      </div>
    </div>
  );
};

export default App;
