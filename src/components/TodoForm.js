import React, { useState } from 'react'

export default function TodoForm(props) {
  const [input, setInput] = useState('')

  //handleChange é responsável por lidar com eventos de mudança (change) ou entrada (input) em elementos de input, como campos de texto. 
  // O handleChange recebe o objeto evento (e) como argumento e atualiza o estado de input com o valor fornecido pelo usuário.
  const handleChange  = (e) => {
    setInput(e.target.value);
  }

  //handleSubmit, por outro lado, é utilizado para lidar com o envio de formulários. 
  /*o handleSubmit recebe o objeto evento (e) como argumento. Ao chamar e.preventDefault(), 
  ele previne o comportamento padrão de envio do formulário, que geralmente resultaria em uma 
  atualização da página. Em seguida, ele executa a lógica desejada, como enviar os dados do 
  formulário para um servidor ou atualizar o estado do componente */
  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input
    // });
    setInput('');
  }


  return (
    <form className = 'todo-form' onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder='Add a todo'
        value={input}
        name = 'text'
        className='todo-input'
        onChange={handleChange}
      />
      <button className='todo-button'>Add todo</button>
    </form>
  )
}
