import React from 'react'; 
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
   const [produto, setProduto] = useLocalStorage('produto', '');
   const {request, data, loading, error} = useFetch();

   React.useEffect(() => {
      async function fetchData() {
         const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/',
         );
         console.log(response, json);
      }
      fetchData();
      
   }, [request]); //se colocar o request como dependência acontece um looping eterno, porque modifica o status varias vezes, portanto o effect vai ser renderizado o tempo todo. Por isso é necessário incluir o useCallBack no useFetch na função request para utiliza-la como dependencia

   function handleClick({target}) {
      setProduto(target.innerText);
   }

   if (error) return <p>{error}</p>
   if(loading) return <p>Carregando...</p>
   //precisa fazer a verificação antes do map, porque até então ele está como null, se tiver dados retorna todo o código abaixo, se não retorna null
   if(data)
      return (
      <div>
         <p>Produto preferido {produto}</p>
         <button onClick={handleClick}>Notebook</button>
         <button onClick={handleClick}>Smartphone</button>
         
         {data.map((produto) => {
            <div key={produto.id}>
               <h1>{produto.nome}</h1>
            </div>   
         })}
      </div>
      );
   else return null;
};

export default App;