// const Day = require('./day');

var Week = React.createClass({
  render () {
    return (
      <div className="row">
        <center>
          <div className="week-detail">
            <Day Url={this.props.Url}/>
            <Day Url={this.props.Url}/>
            <Day Url={this.props.Url}/>
            <Day Url={this.props.Url}/>
            <Day Url={this.props.Url}/>
            <Day Url={this.props.Url}/>
            <Day Url={this.props.Url}/>

          </div>
        </center>
      </div>
     )
  }
});

