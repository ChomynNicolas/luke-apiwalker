import { useState } from "react";
import "./App.css";
import Form from "../Form/Form";
import { Route, Routes } from "react-router-dom";
import Contenido from "../Contenido/Contenido";



function App() {
  const [selected, setselected] = useState("people");
  const [idSearch, setidSearch] = useState("1");
  const [contenido, setcontenido] = useState();


  
  return (
    <>
      <Routes>
        <Route path="/" element={<Form
    añadirCont={{
      setselected,
      setidSearch,
      setcontenido,
    }}
    cont={{ selected, idSearch, contenido }}
  />}/>
        <Route path="/:id" element={<Contenido/>} />
      </Routes>



      
      
    </>
  
  );
}

export default App;
