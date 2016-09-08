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
  },

  getDefaultProps: function(){
    return {
      baseUrl: "https://api.forecast.io/forecast/",
      key: "d079d6aee980626637528da9a94b8bdb",
      latitude: 41.8781,
      longitude: -87.6298
    }
  },

  render () {
    return (
      <div classID="app">
        <div className="container">

          <Header />
          <DayDetail Url={this.props.baseUrl + this.props.key + '/' + this.props.latitude + ',' + this.props.longitude}/>
          <Week Url={this.props.baseUrl + this.props.key + '/' + this.props.latitude + ',' + this.props.longitude}/>




        </div>
      </div>
      )
  }
});


