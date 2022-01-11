import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render() {
        return(
            <div>
                {
                    this.props.follows.map(follower => {
                        return <Follower key={follower.id} follower={follower} />
                 })
                }
            </div>
        )
    }
}



export default FollowerList;