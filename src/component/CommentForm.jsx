
import React from 'react';

export default class CommentForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        // console.log("提交了");
        let author = this.refs.author.value;
        let text = this.refs.text.value;
        // console.log(author, text);
        this.props.onCommentSubmit({author,text,date:"30天前"});
    }



    render() {
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <input type="text" placeholder="姓名" ref="author"/>
                </div>
                <div className="field">
                    <textarea name="" placeholder="评论" ref="text"></textarea>
                </div>
                <button className="ui blue button" type="submit">添加评论</button>
            </form>
        );
    }
}