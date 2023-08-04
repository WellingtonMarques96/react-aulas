import React from "react";

const App = () => { //Quando utiliza o useState ele vai renderizar o app a partir de um status e sempre que for modificado repete.
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({nome:'André', idade: '30'});

  function handleClick() { //essa função muda o status do botão quando ele é clicado para ativo ou inativo, além de incluir se a pessoa possui faculdade quando estiver ativo.
    setAtivo(!ativo);
    setDados({...dados, faculdade: 'Possui faculdade'}) //para não precisar copiar todo o objeto novamente, foi desetruturado e incluído faculdade
  }
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  );
}

export default App;