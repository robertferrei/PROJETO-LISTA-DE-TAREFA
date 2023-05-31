//uuidv4__-- utilizado para add Id aleatorio
//usestate___-- utilizado para mostrar nosso resultado na tela 


import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

import { Container, Todolist, Inputt, Buttonn, ListItem, HH3 } from './styles'

function App() {

  const [list, setList] = useState([]);
  const [inputTask, setinputTask] = useState('');


  function Input(event) {

    setinputTask(event.target.value)

  }
  function button() {
    if (inputTask) {
      setList([...list, { id: uuidv4(), task: inputTask, finished: false }])
    }

  }
  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function excluirTarefa(id) {

    const newlist = list.filter(item => item.id !== id)


    setList(newlist)
  }

  return (

    <Container>
      <Todolist>
        < Inputt onChange={Input} placeholder="O que tenho para fazer" />

        <Buttonn onClick={button}>adicionar</Buttonn>


        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <FcCheckmark onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <FcEmptyTrash onClick={() => excluirTarefa(item.id)} />
                </ListItem>
              ))
            ) : (

              <HH3>Não há itens na Lista</HH3>
            )}
        </ul>
      </Todolist>

    </Container>


  )
}
export default App
