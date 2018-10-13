import React from "react"
import PropTypes from "prop-types"

const element = (
      <div>
        <h1>¿Que Buscas?</h1>
        <li>Planear Ruta</li>
        <li>Sitios de interes</li>
        <li>Ultimos acontecimientos</li>
      </div>
)

class OptionsMenu extends React.Component {
  render () {
    return (
      element
    );
  }
}

export default OptionsMenu
