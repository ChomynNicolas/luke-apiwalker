import React from "react";


export default function Contenido(props) {
  
  

  



  return (<>
          {props.cont?
          <div>
            <h1>{props.cont.name}</h1>
            <p>Altura: {props.cont.height}</p>
            <p>Peso: {props.cont.mass}</p>
            <p>Genero: {props.cont.gender}</p>
          </div>:props.cont===false?<div>Estos no son los droides que está buscando</div>:""}
          
          </>);
}
