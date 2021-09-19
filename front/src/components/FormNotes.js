import { useState, useRef } from 'react'
import Togglable from './Togglable';

const FormNotes = ({ sendNote }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newNote, setNewNote] = useState('');

  const togglableRef = useRef();

  const handleChangeNote = (e) => {
    setNewNote( e.target.value );
  }

  const handleChangeTitle = (e) => {
    setNewTitle( e.target.value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendNote({ title: newTitle, content: newNote });
    setNewNote('');
    setNewTitle('');
    togglableRef.current.toggleVisibility();
  }

  return (
    <>
      <Togglable ref={ togglableRef } showLabel="Nueva Nota" hiddenLabel="Cancelar">
        <h3>Formulario</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newTitle} onChange={handleChangeTitle} placeholder="Titulo" />
          <input type="text" value={newNote} onChange={handleChangeNote} placeholder="Descripcion" />
          <button type="submit">Crear Nota</button>
        </form>
      </Togglable>
    </>
  )
}

export default FormNotes;
