var Day = React.createClass({
  propTypes: {
    icon: React.PropTypes.string,
    precipIntensity: React.PropTypes.number,
    precipProbability: React.PropTypes.number,
    precipType: React.PropTypes.string,
    temperature: React.PropTypes.number,
    temperatureMin: React.PropTypes.number,
    temperatureMax: React.PropTypes.number,
    humidity: React.PropTypes.number
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
      humidity: ''
    }
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var lastGist = result[0];
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  },

  render () {
    return (
      <div className="day-tile">
        <div className="tile-header">
        DAY
        </div>
        <div className="day-tile-image">
          {this.props.Url}
        </div>
        <div className="day-tile-details">
        temperatureMax
        temperatureMin
        precipType
        precipProbability
        </div>
      </div>
    )
  }
})

