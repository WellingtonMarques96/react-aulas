import React from 'react'

const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log("executou");
  }, []); //o segundo argumento se passa uma array vazia que significa quando renderizar a tela não execute esse código novamente porque não tem dependências. Quando eu tenho algo a ser buscado na Array eu posso criar um outro efeito com esse objetivo

  React.useEffect(() => {
    document.title = 'Total ' + contar;
  }, [contar]); //nesse caso existe um estado dentro da array, portanto ele possui uma dependência e vai recarregar sempre

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}

export default App
