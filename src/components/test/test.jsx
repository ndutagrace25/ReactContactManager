import React, { Component } from "react";
class Test extends Component {

    state = {
        title: '',
        userId: ''
    }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => {
          this.setState({
              title: data.title,
              userId: data.userId
          })
      });
  }

  // componentWillMount(){
  //     console.log("component will mount...")
  // }

  // componentDidUpdate(){
  //     console.log("Component did update...");
  // }

  // componentWillUpdate(){
  //     console.log("Component will update...");
  // }

  // componentWillReceiveProps(nextProps, nextState){
  //     console.log('component will recieve new properties....');
  // }
  render() {
      const {title, userId} = this.state;
    return (
      <div className="">
        <h1 className="display-4">Test Component</h1>
        <h2 className="display-4">{title}</h2>
        <h3 className="display-4">{userId}</h3>
      </div>
    );
  }
}

export default Test;
