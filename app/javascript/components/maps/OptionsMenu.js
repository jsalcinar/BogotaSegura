import React from "react"
import PropTypes from "prop-types"

function Menu (props){
  return(
    <div id="menu">
      <font size="18">¿Que Buscas?</font>
      <div>
        <li onClick={props.routeClick}>Planear Ruta</li>
        <li onClick={props.interesClick}>Sitios de interes</li>
        <li onClick={props.lastClick}>Ultimos acontecimientos</li>
      </div>
    </div>
  )
}

function Route (props){
  return(
    <div id="route">
      <font size="18">Planea tu ruta</font>
      <div>
        <form>
          <div className="form-group">
            <label>¿Donde comienza tu viaje?</label>
            <input type="text" className="form-control" id="Origen" placeholder="Origen" disabled/>
          </div>
          <div className="form-group">
            <label>¿Donde termina?</label>
            <input type="text" className="form-control" id="Destino" placeholder="Destino" disabled/>
          </div>
        </form>
        <button className="btn btn-dark btn-block">Enviar</button>
        <button className="btn btn-dark btn-block" onClick={() => { document.location.href = "/maps/map"; }}>Cancelar</button>
      </div>
    </div>
  )
}



class OptionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.initialClick = this.initialClick.bind(this);
    this.routeClick = this.routeClick.bind(this);
    this.interesClick = this.interesClick.bind(this);
    this.lastClick = this.lastClick.bind(this);
    this.state = {option: "Inicial"};
  }

  initialClick() {
    this.setState({option: "Inicial"});
  }

  routeClick() {
    this.setState({option: "Route"});
  }

  interesClick() {
    alert('Sitios de interes');
  }

  lastClick() {
    alert('Ultimos acontecimientos');
  }

  render () {
    const option = this.state.option;
    let element;

    if (option == "Route"){
      element = <Route initialClick={this.initialClick} />;
    } else {
      element = <Menu routeClick={this.routeClick} interesClick={this.interesClick} lastClick={this.lastClick} />;
    }

    return (
      element
    );
  }
}

export default OptionsMenu