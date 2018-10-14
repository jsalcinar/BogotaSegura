import React from "react"
import PropTypes from "prop-types"

function routeClick(e) {
    e.preventDefault();
    alert('Planear Ruta');
  }

function interesClick(e) {
    e.preventDefault();
    alert('Sitios de interes');
  }

function lastClick(e) {
    e.preventDefault();
    alert('Ultimos acontecimientos');
  }

function Menu() {
  return (
      <div id="menu">
        <font size="18">¿Que Buscas?</font>
        <div>
          <li onClick={routeClick}>Planear Ruta</li>
          <li onClick={interesClick}>Sitios de interes</li>
          <li onClick={lastClick}>Ultimos acontecimientos</li>
        </div>
      </div>
    )
}

const main = <Menu />

class OptionsMenu extends React.Component {
  render () {
    return (
      main
    );
  }
}

export default OptionsMenu