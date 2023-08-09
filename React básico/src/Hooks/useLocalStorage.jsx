import React from 'react';
//esse código serve para retornar strings salvas no local storage, caso precise retornar números ou booleanos, tem que fazer a transformação, para invés de concatenar ele salvar

const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
