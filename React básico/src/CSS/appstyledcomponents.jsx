import React from 'react';
//import Styled, { styled } from 'styled-components';

  const ProdutosContainer = styled.div`
    display:flex;
  `;
  const Produto = styled.div`
    flex: 1;
  `;

  const Titulo = styled.h1`
    font-size:2rem;
    color: tomato;
  `;
  const Paragrafo = styled.p`
    font-size: 1rem;
    color:green;
  `;

  const Preco = styled.p`
    background: hsl(${Math.random() * 360}, 100%, 50%);
    color:white;
  `;

  const Comprar = styled.button`
    background: ${({ativo}) => ativo ? "#000" : "#fff"}; 
    // sempre quando vai fazer uma lógica precisa concatenar, desestruturar e chamar a arrow. no caso do ternário os valores precisam estar entre aspas
    font-size:1rem;
    border: 2px solid #000;
    border-radius:5px;
    padding: 0.5rem;
    color: ${({ativo}) => ativo ? "#fff" : "#000"};
    cursor: pointer;
    &:hover { //usa o mesmo formato para after e before
      background:tomato;
    }
  `;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <div>
      <Comprar ativo={ativo} onClick={handleClick}>Compre Aqui</Comprar>
      <ProdutosContainer>
        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Esse é o meu texto</Paragrafo>
          <Preco cor='#84e'>R$ 1000,00</Preco>
        </Produto>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Esse é o meu texto</Paragrafo>
          <Preco cor='#53d956'>R$ 1000,00</Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  );
};

export default App;
