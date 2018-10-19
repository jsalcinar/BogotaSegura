function Walk(props){
  return (
    <div id="div_tips">
      <li>
        Walk mauris in tincidunt lacus, sit amet tempus nisl. 
        Quisque porttitor lectus sed massa sagittis varius. 
        Mauris nisi ipsum, tempus ut ullamcorper quis, pretium 
        ac eros. Sed et ligula nec dolor interdum varius.
      </li>
      <li>
        Curabitur faucibus libero non quam vehicula, 
        at elementum sem dictum. Proin vitae vulputate justo, 
        id volutpat enim. Pellentesque cursus neque tempus lorem 
        lacinia sodales. Donec sed justo elit. Sed luctus mi eros, 
        et commodo eros pulvinar a. Quisque vehicula pellentesque erat.
      </li>
      <li>
        Donec sem urna, sagittis nec placerat a, bibendum a arcu. 
        Phasellus erat sapien, lobortis at leo ut, dignissim tempor 
        leo. Quisque ex leo, faucibus quis ex quis, euismod auctor neque.
      </li>
    </div>
  )
}

function Bus(props){
  return (
    <div id="div_tips">
      <li>
        Bus mauris in tincidunt lacus, sit amet tempus nisl. 
        Quisque porttitor lectus sed massa sagittis varius. 
        Mauris nisi ipsum, tempus ut ullamcorper quis, pretium 
        ac eros. Sed et ligula nec dolor interdum varius.
      </li>
      <li>
        Curabitur faucibus libero non quam vehicula, 
        at elementum sem dictum. Proin vitae vulputate justo, 
        id volutpat enim. Pellentesque cursus neque tempus lorem 
        lacinia sodales. Donec sed justo elit. Sed luctus mi eros, 
        et commodo eros pulvinar a. Quisque vehicula pellentesque erat.
      </li>
      <li>
        Donec sem urna, sagittis nec placerat a, bibendum a arcu. 
        Phasellus erat sapien, lobortis at leo ut, dignissim tempor 
        leo. Quisque ex leo, faucibus quis ex quis, euismod auctor neque.
      </li>
    </div>
  )
}

function Car(props){
  return (
    <div id="div_tips">
      <li>
        Car mauris in tincidunt lacus, sit amet tempus nisl. 
        Quisque porttitor lectus sed massa sagittis varius. 
        Mauris nisi ipsum, tempus ut ullamcorper quis, pretium 
        ac eros. Sed et ligula nec dolor interdum varius.
      </li>
      <li>
        Curabitur faucibus libero non quam vehicula, 
        at elementum sem dictum. Proin vitae vulputate justo, 
        id volutpat enim. Pellentesque cursus neque tempus lorem 
        lacinia sodales. Donec sed justo elit. Sed luctus mi eros, 
        et commodo eros pulvinar a. Quisque vehicula pellentesque erat.
      </li>
      <li>
        Donec sem urna, sagittis nec placerat a, bibendum a arcu. 
        Phasellus erat sapien, lobortis at leo ut, dignissim tempor 
        leo. Quisque ex leo, faucibus quis ex quis, euismod auctor neque.
      </li>
    </div>
  )
}

function Bike(props){
  return (
    <div id="div_tips">
      <li>
        Bike mauris in tincidunt lacus, sit amet tempus nisl. 
        Quisque porttitor lectus sed massa sagittis varius. 
        Mauris nisi ipsum, tempus ut ullamcorper quis, pretium 
        ac eros. Sed et ligula nec dolor interdum varius.
      </li>
      <li>
        Curabitur faucibus libero non quam vehicula, 
        at elementum sem dictum. Proin vitae vulputate justo, 
        id volutpat enim. Pellentesque cursus neque tempus lorem 
        lacinia sodales. Donec sed justo elit. Sed luctus mi eros, 
        et commodo eros pulvinar a. Quisque vehicula pellentesque erat.
      </li>
      <li>
        Donec sem urna, sagittis nec placerat a, bibendum a arcu. 
        Phasellus erat sapien, lobortis at leo ut, dignissim tempor 
        leo. Quisque ex leo, faucibus quis ex quis, euismod auctor neque.
      </li>
    </div>
  )
}

function Tips(props){
  switch(props.type){
    case 'Walk':
      return <Walk />
    case 'Bus':
      return <Bus />
    case 'Car':
      return <Car />
    case 'Bike':
      return <Bike />
    default:
      return <Walk />
  }

}

function Screen(props){
	return (
    <div className="row">
      <div className="col-sm">
        <h1>{props.type}</h1>
        <Tips type={props.type} />
      </div>
      <div className="col-sm">
        <p>Press the picture</p>
        <img id="pic_tips" src={props.image} alt={props.type} onClick={() => { document.location.href = props.data; }}/>
      </div>
    </div>
	)
}


class PageTips extends React.Component {
  render () {
    const type = this.props.type;
    const img = this.props.img_src;
    const data = this.props.data_url;
    return (
      <Screen type={type} image={img} data={data} />
    );
  }
}