var DayDetail = React.createClass({
  propTypes: {
    icon: React.PropTypes.string,
  },

  getDefaultProps: function(){
    return {
    }
  },

  render () {
    return (
      <div className="row">
        <center>
          <div className="day-detail well">
            <div className="row">
              <center>
                <div className="day-detail-header">
                  {this.props.Url}
                </div>
              </center>
            </div>

            <div className="day-detail-image">
            </div>

            <div className="day-detail-details">
            </div>
          </div>
        </center>
      </div>
    )

  }
});


