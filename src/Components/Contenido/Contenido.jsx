import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Contenido() {
  const {id} = useParams();
  const [contenidoId, setcontenidoId] = useState();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(({data})=>{
      setcontenidoId(data);

    })
    .catch((error)=>{
      console.log("Error de busqueda");

    })
  
    
  }, [])
  
    console.log(contenidoId);

  return (
    <div>
      {contenidoId?
          <div>
            <h1>{contenidoId.name}</h1>
            <p>Altura: {contenidoId.height}</p>
            <p>Peso: {contenidoId.mass}</p>
            <p>Genero: {contenidoId.gender}</p>
          </div>:""}

    </div>
  )
}
