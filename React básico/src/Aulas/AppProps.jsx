import React from 'react';

const Titulo = (props) => {
  return <h1 style={{color: props.cor}}>{props.texto}</h1>
};

const AppProps = () => {
  return (
    <div>
      <Titulo cor='red' texto="Meu Título 1" />
      <Titulo cor='blue' texto="Meu Título 2" />
    </div>
  );
};

//quando utiliza a props o que é passado dentro do elemento como atributo é atribuído ao ítem. Normalmente invés de passar a props já desestruturamos os itens no exemplo ficariam: const Titulo = ({cor, texto}) => {return <h1 style={{ color: cor }}>{ texto ) </h1>}

export default AppProps;
