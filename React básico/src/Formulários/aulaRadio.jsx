import React from 'react'

function AulaRadio() {
  const [produto, setProduto] = React.useState('');

  function handleChange({target}) {
    setProduto(target.value)
  }

  return (
    <form>
      <label>
        <input 
          type="radio"
          onChange={handleChange}
          checked={produto === 'smartphone'}
          value="smartphone" />
        Smartphone
      </label>
      <label>
        <input 
          type="radio"
          onChange={handleChange}
          checked={produto === 'notebook'}
          value="notebook" />
        Notebook
      </label> 
    </form>
    
  )
}

export default AulaRadio;
