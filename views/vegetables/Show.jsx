const React = require("react");
class Show extends React.Component {
  render() {
    const vegetable = this.props.vegetable
    return (
      <div>
        <h1> Vegetables Show Page </h1>
        The {vegetable.name} is {vegetable.color}.
        {vegetable.readyToEat? 'It\'s ready to eat.' : 'It\'s NOT ready to eat.'}
      </div>
    );
  }
}
module.exports = Show;
