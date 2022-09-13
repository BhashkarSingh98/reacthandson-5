import React from "react";
import Army from "./HocReturn";
class Gunshot extends React.Component {
  constructor() {
    super();
    this.state = {
      gunshots: 0,
    };
  }
  fair = () => {
    this.setState({ gunshots: this.state.gunshots + 1 });
  };

  render() {
    return (
      <>
      <div className="mainbox">

      
        <h1 className="b1">Higher-Order Components In React</h1>
        <div className="b2">
          <p className="b3">
            Higher order component is a function which takes a wrapped Component
            as an input argument and return a new enhanced component.
          </p>
          <div className="b4">
            <pre><b> Syntex :</b> const SimpleHOC = higherOrderComponent(MyComponent);</pre>
          </div>
        
        <div className="b5">

        <h3 className="b6">
         
          {this.props.gunname} Gunshots - <b className="gunshot">{this.state.gunshots}</b> 
        </h3>
        <button  type="button" className="b7" onClick={this.fair}>Fair </button>
        </div>
        </div>
        </div>
      </>
    );
  }
}
export default Army(Gunshot);
