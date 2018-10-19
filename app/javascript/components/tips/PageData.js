import React from "react"
import PropTypes from "prop-types"

function Screen(props){
  return (
    <div>
      <div className="row">
        <div>
          <h1>
            {props.type} sed vulputate ac metus non sodales. 
            Sed lacinia, ligula et lacinia placerat, arcu tortor 
            fermentum ipsum, id maximus sem leo efficitur enim.
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <p>
            Proin aliquam finibus pulvinar. Pellentesque eget 
            dictum neque. Nunc semper felis ex, dictum semper nulla 
            maximus ut. Sed ante nibh, laoreet eu consectetur vel, 
            posuere eu elit.
          </p>
        </div>
        <div className="col-sm">
          <p>
            Nullam accumsan ac ligula id bibendum. Nam eget lectus 
            dignissim massa aliquet auctor. Donec blandit tellus 
            in nisl tempor, et dictum metus pellentesque.
          </p>
        </div>
        <div className="col-sm">
          <p>
            Donec ullamcorper molestie quam, sed efficitur justo mattis 
            in. Morbi luctus ultrices nulla tincidunt rhoncus. 
            Vestibulum felis mi, varius id pulvinar a, scelerisque non arcu. 
          </p>
        </div>
      </div>
    </div>
  )
}


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
