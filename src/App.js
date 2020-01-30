import React from 'react';

import './App.css';


class Formulario extends React.Component{
  
  state = {
    nom: null,
    ap: null,
    mail:null,
    tel:null,
  };

  handleChange = (evento) => {
    const inputNombre = document.querySelector("#nombre");
    this.setState({ nom: inputNombre.value });
  }

  render(){
    return(
      <div>
        <h1>Inicio</h1>
          <ul>
            {this.state.nom}
          </ul>
        <form className="listado">
          <ul>
            <li>
              <label>Nombre</label>
              <input onInput={this.props.nom} className="estilos" id="nombre"></input>
            </li>
            <li>
              <label>Apellido</label>
              <input onInput={this.props.ap} className="estilos"></input>
            </li>
            <li>
              <label>Email</label>
              <input onInput={this.props.mail} className="estilos"></input>
            </li>
            <li>
              <label>telefono</label>
              <input onInput={this.props.tel} className="estilos"></input>
            </li>
          </ul>
          <button className="eboton">Imprimir</button>
        </form>
      </div>
  )
  }
}


function App() {
  let datos = {
    nombre: null,
    apellido: null,
    email:null,
    telefono:null,
  };
  return (
    <div className="App">
      <header className="App-header">
        <Formulario data={datos} />
      </header>
    </div>
  );
}

export default App;
