import React from 'react';



class Formulario extends React.Component{
    state = {
     nom: null,
     ap: null,
     mail:null,
     tel:null,
   };
   
   handleChange = (evento) => {
      evento.preventDefault();
     const inputNombre = document.querySelectorAll(".formudatos");
     const mostrar = document.querySelectorAll(".ShowText");
     this.setState({ nom: inputNombre[0].value });
     this.setState({ ap: inputNombre[1].value });
     this.setState({ mail: inputNombre[2].value });
     this.setState({ tel: inputNombre[3].value });
     for(let i = 0;i<mostrar.length;i++){
        mostrar[i].style.display = "block";
     }
   }
   
   render(){
     return(
       <div>
         <h1>Inicio</h1>
           <ul>
             <p className="ShowText">Nombre: {this.state.nom}</p>
             <p className="ShowText">Apellido: {this.state.ap}</p>
             <p className="ShowText">E-Mail: {this.state.mail}</p>
             <p className="ShowText">telefono: {this.state.tel}</p>
           </ul>
         <form className="listado">
           <ul>
             <li>
               <label>Nombre</label>
               <input onChange={this.props.nom} className="formudatos"></input>
             </li>
             <li>
               <label>Apellido</label>
               <input onInput={this.props.ap} className="formudatos"></input>
             </li>
             <li>
               <label>Email</label>
               <input onInput={this.props.mail} className="formudatos"></input>
             </li>
             <li>
               <label>telefono </label>
               <input onInput={this.props.tel} className="formudatos"></input>
             </li>
           </ul>
           <button onClick={this.handleChange} className="eboton">Imprimir</button>
         </form>
       </div>
     )
   }
  }
  export default Formulario;