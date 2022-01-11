import React from 'react';
import axios from 'axios';
import User from './components/User'
import FollowerList from './components/FollowerList'

import './index.css'

class App extends React.Component {
  state = {
    avatar_url: '',
    name: '',
    login: '',
    public_repos: '',
    followers: '',
    follows: []
}

  componentDidMount() {
    axios.get('https://api.github.com/users/kimnivore')
      .then(resp => {
        // console.log(resp.data);
        this.setState({
          ...this.state,
          avatar_url: resp.data.avatar_url,
          name: resp.data.name,
          login: resp.data.login,
          public_repos: resp.data.public_repos,
          followers: resp.data.followers
        })
      })
  }

    componentDidMount() {
      axios.get('https://api.github.com/users/kimnivore/followers')
      .then(resp => {
        // console.log(resp.data)
        this.setState({
          ...this.state,
          follows: resp.data
        })
      })
    }
  render() {
    return(<div>

      <h1>Github Info</h1>

      <div>
        <input />
        <button>Search</button>
      </div>
      
      <div>
        <User avatar_url={this.state.avatar_url} name={this.state.name} login={this.state.login} public_repos={this.state.public_repos} followers={this.state.followers}/> 
      </div>
        <FollowerList />
      <div>
        <h2>Followers: </h2>
       
      </div>

    </div>);
  }
}

export default App;
