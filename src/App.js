import React, { useState, useEffect } from 'react'
import Etiquetador from './Etiquetador'
import { Form, Button } from 'react-bootstrap'

export default function App() {
  const [unidades, setUnidades] = useState([])
  const [tarea, setTarea] = useState()
  const hchange = e => {
    setTarea(e.target.value)
  }
  const hsubmit = e => {
    e.preventDefault()
    setUnidades(tarea.split('\n'))
  }
  const ph = "ex:\n ac unidade pó 6k\n ac unidade água 10 L"
  return (
    unidades.length === 0 ?
    <>
      <Form onSubmit={hsubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Unidades</Form.Label>
          <Form.Control as="textarea" placeholder={ph} rows={10} value={tarea} onChange={e => hchange(e)}/>
        </Form.Group>
        <Button type="submit">Ok</Button>
      </Form>
    </>
    : <Etiquetador unidades={unidades} />
  )
}
