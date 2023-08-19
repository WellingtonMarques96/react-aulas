import React from 'react';
import Card from 'react-bootstrap/Card';

const App = () => {
  return ( // no react cada estilo é passado dentro do componente como propriedade. Alguns itens não estão dentro, por exemplo margin. Nesse caso tem que fazer da forma normal do bootstrap
    <Card bg='dark' text='white' className='text-white m-5'>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500,00</Card.Title>
        <Card.Text>Esse é o mesmo texto do outro exemplo</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
