import React from 'react';

class App extends React.Component {
  state = {
    value: ""
  }
  sendPing = () => {
    fetch("/ping").then(res => {
      res.text().then(result => {
        this.setState({ value: result });
      })
    })
  }
  render() {
    const { value } = this.state;
    return (<div>
      <button onClick={this.sendPing}>Click</button>
    <div>{value}</div>
    </div>)
  }
}

export default App;