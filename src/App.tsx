import React from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = React.useState<Item[]>([
    { id: 1, name: 'Abrir o gerenciador de tarefas para planejar as tarefas do dia', done: false }
  ])

  const handleAddText = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })

    setList(newList)
    localStorage.setItem("list", JSON.stringify(newList));
  }

  const handleClick = () =>{
    let cleanList = [
      {id: 1, name: 'Abrir o gerenciador de tarefas para planejar as tarefas do dia', done: false}
    ]
    setList(cleanList)
    localStorage.setItem("list", JSON.stringify(cleanList));
  }

  React.useEffect(() =>{
    if(localStorage.list !== undefined){
      const pegarTarefas = JSON.parse(localStorage.list);
      setList(pegarTarefas)
    }
  }, [])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea onEnter={handleAddText} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      <C.ButtonClear onClick={handleClick}>Limpar todas as tarefas</C.ButtonClear>
      </C.Area>
      
    </C.Container>

  )
}

export default App