import React from 'react'

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState();
  const inputElement = React.useRef(); //utilizado para deixar a página com mais acessibilidade, quando preenche o input ele ter uma referência

  function handleClick() {
    setComentarios([...comentarios, input]); //seta os comentários distribuindo os que já existem (spread) e coloca tbm o novo que está no input
    setInput(''); //limpa o estado para vazio após enviar
    inputElement.current.focus(); // quando clica em enviar o cursor já volta dentro do input para continuar digitando
  }

 // React.useEffect(() => {
//    console.log(video.current.currentTime); //sempre tem que usar o current, porque ele define como objeto pra que possa ser mutável, ou seja, se quiser modificar o video.current é possível.
//  });

  return (
    <div>
      <ul>
        {comentarios.map((comentario,index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input 
          type="text"
          ref={inputElement}
          value={input} 
          onChange={({target}) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App;
