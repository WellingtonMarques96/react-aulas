import React from 'react';
import { GlobalContext } from './GlobalContextEx';

const Limpar = () => {
  const {limparDados} = React.useContext(GlobalContext);
  return (
    <button onClick={limparDados}>Limpar</button>
  );
};

export default Limpar;
