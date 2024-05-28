import { useState } from "react";
import "./App.css";
import Form from "../Form/Form";
import Contenido from "../Contenido/Contenido";


function App() {
  const [selected, setselected] = useState("people");
  const [idSearch, setidSearch] = useState("1");
  const [contenido, setcontenido] = useState();


  
  return (
    <>
      

        <Form
    añadirCont={{
      setselected,
      setidSearch,
      setcontenido,
    }}
    cont={{ selected, idSearch, contenido }}
  />
      
      <Contenido cont={contenido}/>


      
      
    </>
  
  );
}

export default App;
