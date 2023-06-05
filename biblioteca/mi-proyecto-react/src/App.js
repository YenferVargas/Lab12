
import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Tabla from './componentes/table.js';
import Tabla from './table.js';


class App extends Component{
  render(){
    return(
      <div class="App container py-5">
        <h2>Prestamos de Libros</h2>
        <br></br>
        <Tabla></Tabla>
      </div>
    );
  }
}

export default App;
