// const Header = require('./header');
// const Week = require('./week')
// const DayDetail = require('./daydetail')
// const Day = require('/days')

var App = React.createClass({

  propTypes: {
    baseUrl: React.PropTypes.string,
    key: React.PropTypes.string,
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
    Days: React.PropTypes.array,
    current: React.PropTypes.object,
    alert: React.PropTypes.object
  },

  getDefaultProps: function(){
    return {
      baseUrl: "https://api.forecast.io/forecast/",
      key: "d079d6aee980626637528da9a94b8bdb",
      latitude: null,
      longitude: null,
    }
  },

  getInitialState () {
    return {
      current: {},
      Days: [],
      alert: {},
      latitude: 0,
      longitude: 0
    }
  },

  getLocation: function() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }else{
      console.log("Geolocation is not supported in this browser");
    }
  },

  showPosition: function(position) {
    this.setState({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    })
  },

  componentDidMount: function(){
    document.getElementById('alert').style.right="-85%";
    this.getLocation();
    var Url = this.props.baseUrl + this.props.key + '/' + this.state.latitude + ',' + this.state.longitude
    this.serverRequest = $.get(Url, function (result) {
      var currently = result.currently;
      var dayArray = result.daily.data;
      var hourly = result.hourly.data;
      var alerts = result.alert;
      console.log(result);
      this.setState({
        current: currently,
        Days: dayArray,
        hours: hourly,
        alerts: alerts
      });
    }.bind(this)),1000;
  },

  render () {

    return (

      <div className="container">
        <div classID="app">
          <Header />

          <DayDetail  alerts={ this.state.alerts } hours={this.state.hours} current={this.state.current} Url={this.props.baseUrl + this.props.key + '/' + this.props.latitude + ',' + this.props.longitude}/>
          <Week   Days={this.state.Days} Url={this.props.baseUrl + this.props.key + '/' + this.props.latitude + ',' + this.props.longitude}/>

        </div>
      </div>

      )
  }
});


