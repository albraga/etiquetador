import React, { useState } from 'react'

const Etiquetador = ()=> {
  const [unidades, setIUnidades] = useState(["AC DOIS RIACHOS CO2 6 KG",
  "AC DOIS RIACHOS PÓ 6 KG",
  "AC FLEXEIRAS PÓ 6 KG",
  "AC IBATEGUARA PÓ 6 KG"
    ])
  return (
    <>
      <div class="container-fluid">
        <div class="row row-cols-2">
          {unidades.map(unidade => <div class="col pt-5 etiqueta fw-bold">{unidade}</div>)}
        </div>
      </div>
    </>
  )
}

export default Etiquetador