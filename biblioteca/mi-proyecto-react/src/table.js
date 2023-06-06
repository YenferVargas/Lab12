import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class TablaComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prestamos: [],
      idPrestamo: '',
      idLibro: '',
      idUsuario: '',
      fech_prestamo: '',
      fech_devolucion: ''
    };
    this.borrar = this.borrar.bind(this);
    this.deletePrestamo = this.deletePrestamo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editPrestamo = this.editPrestamo.bind(this);
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/libros/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos de préstamo');
        }
        return response.json();
      })
      .then(pres => {
        this.setState({ prestamos: pres });
      })
      .catch(error => {
        console.error(error);
        // Manejar el error, mostrar un mensaje de error o tomar alguna otra acción apropiada
      });
  }

  borrar(cod) {
    this.setState(prevState => ({
      prestamos: prevState.prestamos.filter(el => el.idPrestamo !== cod)
    }));
  }

  deletePrestamo(id) {
    fetch(`http://127.0.0.1:8000/libros/${id}/`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al eliminar el préstamo');
        }
        return response.json();
      })
      .then(data => {
        if (data) {
          this.componentDidMount();
        }
      })
      .catch(error => {
        console.error(error);
        // Manejar el error, mostrar un mensaje de error o tomar alguna otra acción apropiada
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  editPrestamo(id) {
    const { idPrestamo, idLibro, idUsuario, fech_prestamo, fech_devolucion } = this.state;
    const prestamo = {
      idPrestamo: idPrestamo,
      idLibro: idLibro,
      idUsuario: idUsuario,
      fech_prestamo: fech_prestamo,
      fech_devolucion: fech_devolucion
    };

    
    









    fetch(`http://127.0.0.1:8000/libros/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prestamo)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al actualizar el préstamo');
        }
        return response.json();
      })
      .then(data => {
        if (data) {
          this.componentDidMount();
          this.setState({
            idPrestamo: '',
            idLibro: '',
            idUsuario: '',
            fech_prestamo: '',
            fech_devolucion: ''
          });
        }
      })
      .catch(error => {
        console.error(error);
        // Manejar el error, mostrar un mensaje de error o tomar alguna otra acción apropiada
      });
  }

  render() {
    const {prestamos}= this.state;
    const rows = prestamos.map(prestamo =>
      <tr key={prestamo.idPrestamo}>
        <td>{prestamo.id_prestamo}</td>
        <td>{prestamo.titulo}</td>
        <td>{prestamo.nombre_usuario}</td>
        <td>{prestamo.fec_prestamo}</td>
        <td>{prestamo.fec_devolucion}</td>
        <td>
        <button type="button" className="btn btn-warning" onClick={() => this.editPrestamo(prestamo.idPrestamo)}>Editar</button>

        </td>
        <td>
          <button type="submit" className="btn btn-danger" onClick={() => this.deletePrestamo(prestamo.idPrestamo)}>Borrar</button>
        </td>
      </tr>
    );

    return (
      <div className="container py-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Código Prestamo</th>
              <th>Titulo</th>
              <th>Usuario</th>
              <th>Fecha del Prestamo</th>
              <th>Fecha de Devolucion</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>

        <h2>Editar Libros</h2>
        <div className="py-4">
          <div className="row">
            <div className="col-sm-4">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  name="idPrestamo"
                  value={this.state.idPrestamo}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="floatingInput1"
                  placeholder="Número de Prestamo"
                />
                <label htmlFor="floatingInput1">Numero de Prestamo</label>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="idLibro"
                  value={this.state.idLibro}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="floatingInput2"
                  placeholder="Libro"
                />
                <label htmlFor="floatingInput2">Libro</label>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="idUsuario"
                  value={this.state.idUsuario}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="floatingInput3"
                  placeholder="Usuario"
                />
                <label htmlFor="floatingInput3">Usuario</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-floating mb-3">
                <input
                  type="date"
                  name="fech_prestamo"
                  value={this.state.fech_prestamo}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="floatingInput4"
                  placeholder="Fecha de Prestamo"
                />
                <label htmlFor="floatingInput4">Fecha de Prestamo</label>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-floating mb-3">
                <input
                  type="date"
                  name="fech_devolucion"
                  value={this.state.fech_devolucion}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="floatingInput5"
                  placeholder="Fecha de Devolucion"
                />
                <label htmlFor="floatingInput5">Fecha de Devolucion</label>
              </div>
            </div>
            <div className="col-sm-4">
              <button className="btn btn-primary" onClick={() => this.editPrestamo(this.state.idPrestamo)}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TablaComponent;
