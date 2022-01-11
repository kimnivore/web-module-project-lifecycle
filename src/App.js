import React from 'react';
import axios from 'axios';
import User from './components/User'
import FollowerList from './components/FollowerList'
import './index.css'

class App extends React.Component {
  state = {
    user: 'kimnivore',
    userInfo: {},
    followers: []
}

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(resp => {
        // console.log(resp.data);
        this.setState({
          ...this.state,
          userInfo: resp.data
        })
      })
  }

    componentDidUpdate(prevProps, prevState) {
      if(this.state.userInfo !== prevState.userInfo) {
      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(resp => {
        // console.log(resp.data)
        this.setState({
          ...this.state,
          followers: resp.data
        })
      })
    }}

    handleChange = (e) => {
      this.setState({
        ...this.state,
        user: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      // console.log('clicked');
      axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data
        })
      })
    }

    render() {
      return(<div>

        <h1>Github Info</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Github Handle" onChange={this.handleChange}/>
          <button>Search</button>
        </form>
        
        <div>
          <User userInfo={this.state.userInfo}/>
          <h2>Followers: </h2>
          <FollowerList followers={this.state.followers}/>
        </div>

      </div>);
    }
  }

export default App;

