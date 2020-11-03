import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar"

function Post() {
    return (
        <div className="post">
            <Avatar className="post_avatar" alt='aj_bhagat_'
            src="/static/images/avatar/1.jpg"/>
            <h3>Username</h3>
            {/*header->avatar+username */}

            <img className="post_image" src="https://i.pinimg.com/originals/1e/17/f4/1e17f44decace4f57ffa9b5b5d3f1729.png" alt=''></img>
            {/* image */}
            <h4 className="post_text"><strong>aj_bhagat_</strong>Never Give Up!</h4>
        </div>
    )
}

export default Post
