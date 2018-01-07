"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

class CommentBox extends React.Component {
    render () {
        return (
            <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider"></div>
            </div>
        )
    }
}

// export default CommentBox;
export {CommentBox as  default} ;