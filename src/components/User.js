import React from 'react';

class User extends React.Component {
    render() {
        const {userInfo } = this.props;
        return(
            <div className='user'>
                <div>
                    <img width='200' src={userInfo.avatar_url} />
                    <a href={userInfo.html_url}> <h3>{userInfo.name}</h3></a>
                    <p>({userInfo.login})</p>
                    <p>Total Repos: {userInfo.public_repos}</p>
                    <p>Total Followers: {userInfo.followers}</p>
                </div>
            </div>
        )
    }
}

export default User;