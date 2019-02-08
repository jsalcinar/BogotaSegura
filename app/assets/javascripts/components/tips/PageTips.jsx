function TipsData(props){
  return (
    <div className="col-sm-8 tips_div">
      <div  className="row infoRow firstRow">
        <div className="col-sm infoCol">
          <h2>Ponte el casco</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="col-sm infoCol">
          <h2>Ponte el casco</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div  className="row infoRow">
        <div className="col-sm infoCol">
          <h2>Ponte el casco</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="col-sm infoCol">
          <h2>Ponte el casco</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div  className="row infoRow">
        <div className="col-sm infoCol">
          <h2>Ponte el casco</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="col-sm infoCol">
          <h2>Ponte el casco</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  )
}

function Tips(props){
  switch(props.type){
    case 'Walk':
      return <TipsData />
    case 'Bus':
      return <TipsData />
    case 'Car':
      return <TipsData />
    case 'Bike':
      return <TipsData />
    case 'Moto':
      return <TipsData />
    default:
      return <TipsData />
  }

}

function Screen(props){
	return (
    <div className="fullPage">
      <div className="row">
        <div className="col-sm-4">
          <img id="tipsImage" src={props.image} alt={props.type}/>
        </div>
        <Tips type={props.type} />
      </div>
    </div>
	)
}


class PageTips extends React.Component {
  render () {
    const type = this.props.type;
    const img = this.props.img_src;
    return (
      <Screen type={type} image={img}/>
    );
  }
}