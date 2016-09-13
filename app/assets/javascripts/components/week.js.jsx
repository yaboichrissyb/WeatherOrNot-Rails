// const Day = require('./day');
var Week = React.createClass({
  propTypes: {
    Days: React.PropTypes.array
  },

  getInitialState () {
    return {
      Days: []
    }
  },

  // componentDidMount: function() {
  //   this.setState({
  //     Days: this.props.Days.slice()
  //   });
  // }

  render () {
    var dayArray = this.props.Days;
    var weekArray = dayArray.slice(1,8);
    return (

      <div className="row">
          <div className="week-detail ">
            {weekArray.map(function(day, index){
              return <Day dayData={ day } index={ index } key={ index }/>;
            })}
          </div>
      </div>

     )
  }
});

