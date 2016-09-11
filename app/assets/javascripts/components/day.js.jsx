
var Day = React.createClass({
  propTypes: {
    icon: React.PropTypes.string,
    precipIntensity: React.PropTypes.number,
    precipProbability: React.PropTypes.number,
    precipType: React.PropTypes.string,
    temperature: React.PropTypes.number,
    temperatureMin: React.PropTypes.number,
    temperatureMax: React.PropTypes.number,
    humidity: React.PropTypes.number,
    dayData: React.PropTypes.object
  },

  getInitialState () {
    return {
      icon: '',
      precipIntensity: '',
      precipProbability: '',
      precipType: '',
      temperature: '',
      temperatureMin: '',
      temperatureMax: '',
      humidity: '',
      time: '',
      hover: false
    }
  },

  componentDidMount: function() {
    this.setState({
      time: this.dayConverter(this.props.dayData.time),
      temperatureMin: this.roundNum(this.props.dayData.temperatureMin),
      temperatureMax: this.roundNum(this.props.dayData.temperatureMax),
      precipType: this.stringCheck(this.props.dayData.precipType),
      precipProbability: this.decConverter(this.props.dayData.precipProbability),
      icon: this.props.dayData.icon,
      index: this.props.index,
      formattedClass: this.formatClassName(this.props.dayData.icon),
      summary: this.props.dayData.summary
    });
  },

  roundNum: function(num) {
    return Math.round(num);
  },

  decConverter: function(dec) {
    var percent = Math.round(dec *10000) / 100;
    if (percent == 0) {
      return "no"
    } else {
      return percent.toString() + "%";
    }
  },

  dayConverter: function(unix) {
    var weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    var date = new Date(unix * 1000);
    var dayNum = date.getDay();
    return weekArray[dayNum];
  },

  stringCheck: function(str) {
    if(str != null) {
      return str
    } else {
      return "precipitation"
    }
  },

  weatherString: function(percent, type) {
    if(type != "precipitation") {
      return type + ': ' + percent;
    } else {
      return "no precip"
    }
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
      <div className="day-tile">
        <div className="tile-header">
          {this.state.time}
        </div>

        <div className="day-tile-image">
          <i className={this.state.formattedClass}></i>
        </div>

        <div className="day-tile-details">
        <h6>{this.state.summary}</h6>
        <h5>{this.state.temperatureMin}<i className="wi wi-fahrenheit small-icon"></i> - {this.state.temperatureMax}<i className="wi wi-fahrenheit small-icon"></i></h5>
        <h6>{this.weatherString(this.state.precipProbability, this.state.precipType)}</h6>

        </div>
      </div>
    )
  }
})

