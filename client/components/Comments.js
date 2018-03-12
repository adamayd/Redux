import React from 'react';

class Comments extends React.Component {
  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('submitting the form')
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    console.log(postId, author, comment);
    this.props.addComment(postId, author, comment)
  }
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form 
          ref="commentForm" 
          className="comment-form" 
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments;