var DayDetail = React.createClass({
  propTypes: {
    icon: React.PropTypes.string,
    time: React.PropTypes.number,
    current: React.PropTypes.object,
    date: React.PropTypes.string,
    hours: React.PropTypes.array
  },

  getDefaultProps: function(){
    return {
      date: '',
      hours: []
    }
  },

  getInitialState () {
    return {
      time: '',
      current: {},
      date: '',
      hours: [],
      hour: '',
      minute: '',
      seconds: '',
      temperature: '',
      humidity: '',
      visibility: ''
    }
  },

  formatDate: function(unix){
    var weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var today = new Date(unix * 1000);
    var month = monthArray[today.getMonth()];
    var day = weekArray[today.getDay()];
    var date = today.getDate();
    var year = 1900 + today.getYear();
    return day + ", " + month + " " + date + ", " + year;
  },

  roundNum: function(num) {
    return Math.round(num);
  },

  setTemp: function() {
    var temp = this.roundNum(this.props.current.temperature);
    this.setState({
      temperature: temp
    })
  },

  setHumidity: function() {
    var hum = this.decConverter(this.props.current.humidity);
    this.setState({
      humidity: hum
    })
  },

  setVis: function() {
    var vis = this.props.current.visibility;
    this.setState({
      visibility: vis
    });
  },

  decConverter: function(dec) {
    var percent = Math.round(dec *10000) / 100;
    return percent.toString() + "%";
  },

  formatTime: function(){
    var now = new Date();
    var hour = now.getHours();
    var seconds = now.getSeconds();
    var part = "AM"
    if(hour > 12){
      part = "PM";
      hour = (hour-12).toString();
    } else if(hour == 0) {
      hour = 12;
      hour = hour.toString();
    } else {
      hour = hour.toString();
    }
    if(seconds < 10){
      seconds = "0" + seconds.toString();
    }
    var minutes = now.getMinutes();
    if(minutes < 10){
      minutes = "0" + minutes.toString();
    } else {
      minutes = minutes.toString();
    }
    this.setState({
      hour: hour,
      minutes: minutes,
      part: part,
      seconds: seconds
    });
  },

  componentDidMount: function() {
     window.setInterval(function () {
      this.formatTime();
      this.setTemp();
      this.setHumidity();
      this.setVis();
    }.bind(this), 1000);
    this.setState({
      date: this.formatDate(this.props.current.time),
      formattedClass: this.formatClassName(this.props.current.icon)
    });
  },

  componentWillMount: function() {
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

  alertFormatter: function(alert){
    if(alert != null){
      var title = alert.title;
      var expires = this.formatTime(alert.expires);
      var description = alert.description;
      var uri = alert.uri;
      return (
        <div className="warning">
          <p>{title}</p>
          <p>{description}</p>
          <p>This alert expires at {expires}<a href={uri}>Info</a></p>
        </div>
      )
    } else {
      return (
        <div className="warning-null">
          <p>No alerts at this time</p>
        </div>
      )
    }
  },

  render () {
    var fullArray = this.props.hours;
    var twelveArray = fullArray.slice(1,13);
    var hourNums = Array.from(twelveArray);
    return (
      <div className="row">
        <center>
          <div className="day-detail well">

            <div className="row">
              <center>
                <div className="day-detail-header">
                <span>{this.formatDate(this.props.current.time)}</span><span className="time">{this.state.hour}:{this.state.minutes}:{this.state.seconds}{this.state.part}</span>
                </div>
              </center>
            </div>

            <div className="day-detail-image">
              <div className="summary">Today is {this.props.current.summary}</div>
              <i className={this.formatClassName(this.props.current.icon) + " big-icon"}></i>
            </div>


            <div className="day-detail-details">

              <div className="row">
                <div className="day-data-container">
                  <span className="day-data col-sm-12 col-lg-4"><i className="wi wi-thermometer day-icon"></i> Feels like: {this.state.temperature}<i className="wi wi-fahrenheit small-icon"></i></span>
                  <span className="day-data circle col-sm-12 col-lg-4"><i className="wi wi-humidity day-icon"></i>Humidity: {this.state.humidity}</span>
                  <span className="day-data circle col-sm-12 col-lg-4"><i className="wi wi-cloud day-icon"></i>Cloud Cover: {this.decConverter(this.props.current.cloudCover)}</span>
                </div>
              </div>

              <div className="row">
                <div className="day-data-container">
                  <span className="day-data col-sm-12 col-lg-4"><i className="wi wi-storm-warning day-icon"></i> Nearest Storm: {this.props.current.nearestStormDistance} miles</span>
                  <span className="day-data col-sm-12 col-lg-4"><i className="wi wi-day-haze day-icon"></i>Visibility: {this.state.visibility} miles</span>
                  <span className="day-data col-sm-12 col-lg-4"><i className="wi wi-windy day-icon"></i>Wind Speed: {this.props.current.windSpeed} mph</span>
                </div>
              </div>
              <div className="row alert-container">
                {this.alertFormatter(this.alerts)}
              </div>
              <div className="hour-container">
                {hourNums.map(function(hour, index){
                  return <HourTile data={ hour } key={ index } />;
                })}
              </div>
            </div>

          </div>
        </center>
      </div>
    )

  }
});


