import React from "react";

export default class Purecomp extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    console.log("click");
    return (
      <div className="p1">
        <h1 className="p2"> Pure Component In React</h1>
        <div className="p3">
          <p className="p4">
            React.PureComponent is similar to React.Component. The difference
            between them is that React.Component doesn’t implement
            shouldComponentUpdate().
            <p className="p5"> A React component is considered pure if it
            renders the same output for the same state and props. For this type
            of class component, React provides the PureComponent base class.
            Class components that extend the React.PureComponent class are
            treated as pure components.
            </p>
          </p>
        
        <div className="p6">
        <h1>pure component {this.state.count}</h1>
        <button
        className="p8"
          type="button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          update
        </button>
        </div>
        </div>
      </div>

    );
  }
}
