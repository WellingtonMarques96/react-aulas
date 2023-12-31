import React from 'react';

const AulaSelect = () => {
  const [select, setSelect] = React.useState('');
  return (
    <form>
      <select value={select} onChange={({target}) => setSelect(target.value)} id="produtos">
        <option disabled value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
    </form>
  );
};

export default AulaSelect;
