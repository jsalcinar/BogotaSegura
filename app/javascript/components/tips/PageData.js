import React from "react"
import PropTypes from "prop-types"


class PageData extends React.Component {
  render () {
    return (
      <React.Fragment>
        Type: {this.props.type}
      </React.Fragment>
    );
  }
}

PageData.propTypes = {
  type: PropTypes.string
};

export default PageData
