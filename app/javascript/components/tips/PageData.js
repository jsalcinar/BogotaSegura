import React from "react"
import PropTypes from "prop-types"


class PageData extends React.Component {
  render () {
    const type = this.props.type;
    return (
      <React.Fragment>
        <Screen type={type} />
      </React.Fragment>
    );
  }
}

PageData.propTypes = {
  type: PropTypes.string
};

export default PageData
