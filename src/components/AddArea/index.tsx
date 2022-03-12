import React from 'react';
import * as C from './styles';

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
  const [inputText, setInputText] = React.useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(inputText !== ''){
        onEnter(inputText);
        setInputText('');
      }
  }

  return(
    <C.Container>
      <form onSubmit={handleSubmit}>
        <button className="image" >➕</button>
        <input
          type="text"
          placeholder='Adicione uma tarefa'
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
      </form>
    </C.Container>
  );
}