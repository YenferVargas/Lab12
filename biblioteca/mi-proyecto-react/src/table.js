import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Tabla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prestamos: []
    };
    this.borrar = this.borrar.bind(this);
    this.deletePrestamo = this.deletePrestamo.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8000/prestamos/')
      .then(response => response.json())
      .then(pres => {
        this.setState({ prestamos: pres });
      });
  }

  borrar(cod) {
    const temp = this.state.prestamos.filter(el => el.idPrestamo !== cod);
    this.setState({
      prestamos: temp
    });
  }

  deletePrestamo(id) {
    fetch(`http://localhost:8000/prestamos/${id}/`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.componentDidMount();
        }
      });
  }

  render() {
    const rows = this.state.prestamos.map(prestamo =>
      <tr key={prestamo.idPrestamo}>
        <td>{prestamo.idPrestamo}</td>
        <td>{prestamo.idLibro}</td>
        <td>{prestamo.idUsuario}</td>
        <td>{prestamo.fech_prestamo}</td>
        <td>{prestamo.fech_devolucion}</td>
        <td>
          <a href="#editar">
            <button type="button" className="btn btn-warning">Editar</button>
          </a>
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
                <input type="number" value={this.state.idPrestamo} className="form-control" id="floatingInput" placeholder="Número de Prestamo" />
                <label htmlFor="floatingInput">Numero de Prestamo</label>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fomr-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Libro" />
                <label htmlFor="floatingInput">Libro</label>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fomr-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Usuario" />
                <label htmlFor="floatingInput">Usuario</label>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fomr-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Fecha de Prestamo" />
                <label htmlFor="floatingInput">Fecha de Prestamo</label>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fomr-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Fecha de Devolucion" />
                <label htmlFor="floatingInput">Fecha de Devolucion</label>
              </div>
            </div>
            <div className="col-sm-4">
              <button type="button" className="btn btn-success">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabla;
