import React from 'react';

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef(); //adicionado nesse caso para que o tempo em segundos do timeout para que o valor não seja modificado quando a aplicação renderizar novamente

function handleClick() {
  setCarrinho(carrinho + 1);
  setNotificacao('ítem adicionado ao carrinho');

  clearTimeout(timeoutRef.current);
  timeoutRef.current = setTimeout(() => { //precisa adicionar o current se não pode dar bug
    setNotificacao(null);
  }, 2000);
}
console.log(carrinho);

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App;