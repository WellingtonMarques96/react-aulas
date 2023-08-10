import React from 'react';

const AulaInput = () => {
//  const [nome, setNome] = React.useState('');
//  const [email, setEmail] = React.useState('');

  const [form, setForm] = React.useState({
    nome:'',
    email:'',
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange({target}) {
    const {id, value} = target;
    setForm({...form, [id]: value});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input 
        id='nome' 
        type="text" 
        name='nome'
        value={form.nome} 
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input 
        id='email' 
        type="text" 
        name='email'
        value={form.email} 
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  );
}

export default AulaInput;
