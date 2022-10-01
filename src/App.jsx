/* eslint-disable import/no-anonymous-default-export */
import Card from "./components/layout/Card";
import ComAleatorio from "./components/basicos/ComAleatório";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import React from "react";

export default (_) => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>

      <Card titulo="#04 - Desafio Aleatório">
        <ComAleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#02 - ComParametro">
        
      <ComParametro 
      titulo="Situação do Aluno" 
      aluno="Pedro Silva" 
      nota={9.3} />
      <ComParametro
        titulo="Situação do Aluno"
        aluno="Maria Aparecida"
        nota={9.9}
      />
      </Card>  

      <Card titulo="#01 - Primeiro Componente">
      <Primeiro></Primeiro>
      </Card>

      
    </div>
  );
};
