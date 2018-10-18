import React from "react"
import PropTypes from "prop-types"

function Screen(props){
	return (
    <div>
  		<h1>{props.type}</h1>
      <p>El medio de transporte es {props.type}</p>
    </div>
	)
}


class PageTips extends React.Component {
  render () {
    const type = this.props.type;
    return (
      <Screen type={type} />
    );
  }
}

PageTips.propTypes = {
  type: PropTypes.string
};

export default PageTips
