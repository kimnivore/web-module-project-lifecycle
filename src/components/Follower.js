import React from 'react';

class Follower extends React.Component {
    render() {
        
        return (
            <div>
                <img width='200' src={this.props.avatar_url} alt={this.props.login} />
                <p>{this.props.login}</p>
            </div>
        )
    }

}


export default Follower;