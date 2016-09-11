var HourTile = React.createClass({

  propTypes: {
    data: React.PropTypes.object
  },

  getInitialState: function(){
    return {
      time: ''
    }
  },

  componentDidMount: function() {
    this.setState({
      time: "1"
    });
  },

  formatTime: function(unix){
    var time = new Date(unix*1000);
    var hourTime = time.getHours();
    if(hourTime > 12){
      hourTime = (hourTime - 12).toString() + "PM";
    } else if(hourTime === 0) {
      hourTime = "12AM";
    }else {
      hourTime = hourTime.toString() + "AM";
    } return hourTime;
  },

  formatClassName: function(icon) {
    switch (icon) {
      case "clear-day":
        icon = "wi wi-day-sunny icon"
        break;
      case "clear-night":
        icon = "wi wi-night-clear icon"
        break;
      case "rain":
        icon = "wi wi-rain icon"
        break;
      case "snow":
        icon = "wi wi-snow icon"
        break;
      case "sleet":
        icon = "wi wi-sleet icon"
        break;
      case "wind":
        icon = "wi wi-strong-wind icon"
        break;
      case "fog":
        icon = "wi wi-fog icon"
        break;
      case "cloudy":
        icon = "wi wi-cloudy icon"
        break;
      case "partly-cloudy-day":
        icon = "wi wi-day-cloudy icon";
        break;
      case "partly-cloudy-night":
        icon = "wi wi-night-cloudy icon";
    }
    return icon;
  },

  render () {
    return (
      <div className="hour-tile">
        <p>{this.formatTime(this.props.data.time)}</p>
        <i className={this.formatClassName(this.props.data.icon)}></i>
        <p className="tile-temp">{Math.round(this.props.data.apparentTemperature)}</p>
      </div>
    )
  }
})


