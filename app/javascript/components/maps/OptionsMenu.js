import React from "react"
import PropTypes from "prop-types"

function Menu() {
  return (
      <div id="menu">
        <h1 ><font size="18">¿Que Buscas?</font></h1>
        <div>
          <li>Planear Ruta</li>
          <li>Sitios de interes</li>
          <li>Ultimos acontecimientos</li>
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