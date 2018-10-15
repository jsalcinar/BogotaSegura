import React from "react"
import PropTypes from "prop-types"

function Menu (props){
  return(
    <div id="Menu" className="tabcontent">
      <font size="18">¿Que Buscas?</font>
      <div>
        <li id="sel_routes" >Planear Ruta</li>
        <li id="sel_interes">Sitios de interes</li>
        <li id="sel_news">Ultimos acontecimientos</li>
      </div>
    </div>
  )
}

function RouteBtn (props){
  return(
    <div id="btngroup">
      <button className="btn btn-dark btn-block" >Enviar</button>
      <button className="btn btn-dark btn-block" >Cancelar</button>
      <button className="btn btn-dark btn-block" >Regresar</button>
    </div>
  )
}

function Route (props){
  return(
    <div id="Route" className="tabcontent">
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
        <RouteBtn />
      </div>
    </div>
  )
}

function Interes(props){
  return(
    <div id="Interes" className="tabcontent">
      <h3>London</h3>
      <p>London is the capital city of England.</p>
    </div>
  )
}

function News(props){
  return(
    <div id="News" className="tabcontent">
      <h3>Tokyo</h3>
      <p>Tokyo is the capital of Japan.</p>
    </div>
  )
}

class OptionsMenu extends React.Component {
  render () {
    return (
      <div>
        <Menu />
        <Route />
        <Interes />
        <News />
      </div>
    );
  }
}

export default OptionsMenu