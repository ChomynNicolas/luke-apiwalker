import axios from "axios";
import React from "react";

export default function Form(props) {
    const {setselected,setidSearch,setcontenido} = props.añadirCont
    const {selected,idSearch,contenido} = props.cont
    const handleChangeSelect=(event)=>{
      setselected(event.currentTarget.value);
    }

    const handleChangeInput=(event)=>{
      setidSearch(event.currentTarget.value);
      
    }

    const handleSubmit=async (event)=>{
      event.preventDefault();
      axios.get(`https://swapi.dev/api/${selected}/${idSearch}`)
        .then(({data})=>{
          setcontenido(data);
        })
        .catch((error)=>{
          setcontenido(false)

        })
      
    }




  return (
          <div className="nav">
            <form onSubmit={handleSubmit}>
              <label htmlFor="seleccionar">Buscar: </label>
              <select name="seleccionar" id="seleccionar" onChange={handleChangeSelect}>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
              </select>
              <label htmlFor="id-search">Id: </label>
              <input type="text" name="id-search" id="id-search" onChange={handleChangeInput}/>

              <button type="submit">Buscar</button>
            </form>



            {props.cont.contenido?
          <div>
            <h1>{props.cont.contenido.name}</h1>
            <p>Altura: {props.cont.contenido.height}</p>
            <p>Peso: {props.cont.contenido.mass}</p>
            <p>Genero: {props.cont.contenido.gender}</p>
          </div>:props.cont.contenido===false?<div>Estos no son los droides que está buscando</div>:""}

          </div>
    );
}
