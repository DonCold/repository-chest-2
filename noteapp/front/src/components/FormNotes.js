import { useRef } from 'react'
import PropTypes from 'prop-types'

import Togglable from './Togglable'
import { useField } from './../hook/useField'

const FormNotes = ({ sendNote }) => {
  const title = useField('text')
  const note = useField('text')

  const togglableRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    sendNote({ title: title.form.value, content: note.form.value })
    togglableRef.current.toggleVisibility()
    title.reset()
    note.reset()
  }

  return (
    <>
      <Togglable ref={ togglableRef } showLabel="Nueva Nota" hiddenLabel="Cancelar">
        <h3>Formulario</h3>
        <form onSubmit={handleSubmit}>
          <input {...title.form} placeholder="Titulo" />
          <input {...note.form} placeholder="Descripcion" />
          <button type="submit">Crear Nota</button>
        </form>
      </Togglable>
    </>
  )
}

FormNotes.propTypes = {
  sendNote: PropTypes.func.isRequired
}

export default FormNotes
