import React from 'react';

const useFetch = () => {
  const [data, setData ] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
// invés de retornar um request, vamos criar uma função para ter maior controle de usar o request na hora que quiser
 //está passando o url do fetch e as opções dentro dele, por exemplo, post, delete. também será assíncrona invés de precisar passar o then após o fetch, portanto coloca o async antes da function e nas promessas coloca o await
 // utilizou o useCallBack para que a função request seja executada somente uma vez
  const request = React.useCallback(async (url, options) => {
    let response; //ambos foram definidos como uma variável que pode ser modificada antes de iniciar o async, dessa forma quando inicia o fetch os valores serão atribuídos corretamente
    let json;
    try {
      setError(null) // define o erro como null para não ficar aparecndo sempre na tla quando o usuário faz o request
      setLoading(true); //coloca o carregando na tela no início da função
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null // caso ocorra algum erro
      setError(('Erro'));
    } finally {
      setData(json); //retorna depois de rodar o código sem erro
      setLoading(false);  // no final volta para falso
      return {response, json}
    }
  }, []); //para lidar com erro em função assíncrona é com try e catch

  return {data, error, loading, request}; //está retornando um objeto porque são diversas coisas, se fosse array teria que desestruturar na ordem correta, o objeto pode puxar somente o que quiser.
};

export default useFetch;
