var React = require('react');
var PropTypes = require('prop-types');

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }
  componentDidMount() {
    var stopper = this.props.text + '...';
    this.interval = window.setInterval(function(){
      if (this.state.text === stopper) {
        this.setState(function() {
          return {
            text: this.props.text
          }
        });
      } else {
        this.setState(function (prevState) {
          return {
            text: prevState.text + '.'
          }
        });
      }
    }.bind(this), this.props.speed); //will invoke this function every 300ms to give appearance of a "dot dot dot" loading animation.
  }
  componentWillUnmount() {
    window.clearInterval(this.interval); //remove the interval once this component unmounts so that this function isn't continuing to run.
  }
  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 200
};

module.exports = Loading;
