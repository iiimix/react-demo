
import 'semantic-ui/dist/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './component/CommentBox.jsx';


ReactDOM.render(
    <CommentBox url="src/comments.json" />,
    document.getElementById("container")
);