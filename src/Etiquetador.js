import React, { useState } from 'react'

const Etiquetador = ({unidades}) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-2">
          {unidades.map(unidade => <div class="col pt-5 etiqueta fw-bold">{unidade}</div>)}
        </div>
      </div>
    </>
  )
}

export default Etiquetador