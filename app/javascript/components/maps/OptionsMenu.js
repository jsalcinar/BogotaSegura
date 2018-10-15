import React from "react"
import PropTypes from "prop-types"

function Menu (props){
  return(
    <div id="menu">
      <font size="18">¿Que Buscas?</font>
      <div>
        <li id="01" onClick={props.routeClick}>Planear Ruta</li>
        <li onClick={props.interesClick}>Sitios de interes</li>
        <li onClick={props.lastClick}>Ultimos acontecimientos</li>
      </div>
    </div>
  )
}


function Buttons (props){
  if(props.complete=="Route_Complete"){
    return(
      <div id="btngroup">
        <button className="btn btn-dark btn-block" onClick={() => { document.location.href = "/maps/map"; }}>Regresar</button>
      </div>
      )
  }else{
  return(
    <div id="btngroup">
      <button className="btn btn-dark btn-block" id="Send" onClick={props.initialClick}>Enviar</button>
      <button className="btn btn-dark btn-block" onClick={() => { document.location.href = "/maps/map"; }}>Cancelar</button>
    </div>
  )}
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
        <Buttons complete={props.complete} initialClick={props.initialClick}/>
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
    this.setState({option: "Route_Complete"});
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

    if (option == "Route" || option == "Route_Complete"){
      element = <Route initialClick={this.initialClick} complete={option} />;
    } else {
      element = <Menu routeClick={this.routeClick} interesClick={this.interesClick} lastClick={this.lastClick}  />;
    }

    return (
      element
    );
  }
}

export default OptionsMenu