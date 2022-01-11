import React from 'react';

class Follower extends React.Component {
    render() {
        const {follower} = this.props;
        return (
            <div>
                <img width='200' src={follower.avatar_url} alt={follower.login} />
                <a href={follower.html_url}><p>{follower.login}</p></a>
                
            </div>
        )
    }

}


export default Follower;