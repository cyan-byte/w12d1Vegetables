const React = require("react");
class Show extends React.Component {
  render() {
    const fruit = this.props.fruit
    return (
      <div>
        <h1> Fruits Show Page </h1>
        The {fruit.name} is {fruit.color}.
        {fruit.readyToEat? 'It\'s ready to eat.' : 'It\'s NOT ready to eat.'}
      </div>
    );
  }
}
module.exports = Show;
