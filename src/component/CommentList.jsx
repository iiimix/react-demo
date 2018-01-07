
import React from 'react';
import Comment from './Comment.jsx'
class CommentList extends React.Component {

    render() {
        let commentItems = this.props.data.map((comment, index) => {
            return (
                <Comment key={index} author={comment.author} date={comment.date}>{comment.text}</Comment>
            )
        });
        return (
            <div>
                {commentItems}
            </div>
        )
    }
}

export {CommentList as default};