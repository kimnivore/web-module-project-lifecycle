import React from 'react';

class User extends React.Component {
    render() {
        return(
            <div className='user'>
                <img width='200' src={this.props.avatar_url} />
                <a href={this.props.html_url}> <p>{this.props.name}</p></a>
                <div>
                    {/* <p>{this.props.name}</p> */}
                    <p>({this.props.login})</p>
                    <p>Total Repos: {this.props.public_repos}</p>
                    <p>Total Followers: {this.props.followers}</p>
                </div>
            </div>
        )
    }
}

export default User;