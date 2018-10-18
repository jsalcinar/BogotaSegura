import React from "react"
import PropTypes from "prop-types"

function Screen(props){
	return (
    <div className="row">
      <div className="col-sm">
        <h1>{props.type}</h1>
        <p>El medio de transporte es {props.type}</p>
      </div>
      <div className="col-sm">
        <img src={props.image} alt={props.type} id="ModePic" />
      </div>
    </div>
	)
}


class PageTips extends React.Component {
  render () {
    const type = this.props.type;
    const img = this.props.img_src;
    return (
      <Screen type={type} image={img} />
    );
  }
}

PageTips.propTypes = {
  type: PropTypes.string,
  img_src: PropTypes.string
};

export default PageTips
