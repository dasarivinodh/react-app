import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    // imageUrl: "https://picsum.photos/200"
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>No Tags Here!!</p>;
    else
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }
  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        {this.state.tags.length === 0 && "Create Tags"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; // object de structring pick thre property from state
    return count === 0 ? "Zero" : count; // we can write jsx here
  }
  handleIncrement = () => {
    // cannot access to this here why? bcz strict mode enabled we have to use bind method here
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
