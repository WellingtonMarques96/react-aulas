import React from 'react';

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id:'senha',
    label: 'Senha',
    type:'password'
  },
  {
    id:'cep',
    label: 'Cep',
    type:'text'
  },
  {
    id:'rua',
    label: 'Rua',
    type:'text'
  },
  {
    id:'numero',
    label: 'Número',
    type:'text'
  },
  {
    id:'bairro',
    label: 'Bairro',
    type:'text'
  },
  {
    id:'cidade',
    label: 'Cidade',
    type:'text'
  },
  {
    id:'estado',
    label: 'Estado',
    type:'text'
  },
]

const ExercicioInput = () => {
  const [textarea, setTextarea] = React.useState('');
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: ''
      };
    }, {}),
  ); // o callback tem dois valores o primeiro é o valor anterior que foi retornado, o acumulador e o segundo é o campo normal. O acc retorna uma array dos ítens anteriores, mas queremos que fique vazio, por isso foi desestruturado e no final retorna um objeto vazio
  // o valor que vai ser retornado dentro do objeto é o Id de cada field

  const [response, setResponse] = React.useState(null); // retorna a resposta do formulário como null e depois de atualizar o estado, quando envia o formulário faz a verificação e aparece a mensagem final

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  } // quando a função ocorre e aperta o submit, ele faz um post na API que está vinculada pelo Fetch. Quando faz um post precisa passar as opções
  //o methodo precisa ser informado pois normalmente é o get. A segunda é o cabeçalho, nesse caso usa o conten-type (sempre como string) ele é um objeto que informa o valor do conteúdo
  // E depois informa o corpo do post que deve ser em string transformando o json do form em string

  function handleChange({target}) {
    const {id, value} = target;
    setForm({...form, [id]: value});
  } //atualiza o status do formulário quando são colocados os dados


  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({id, label, type}) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input 
            type={type}
            id={id}
            value={form[id]}
            onChange={handleChange}
          />  
        </div>
      ))}
      <label htmlFor="textarea">Mensagem</label>
      <textarea 
        value={textarea} 
        onChange={({target}) => setTextarea(target.value)} 
        rows="5" 
      />
      <button>Enviar</button>
      {response && response.ok && <p>Usuário criado</p>}
    </form>
  );
};

export default ExercicioInput;
