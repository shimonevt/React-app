import React from "react";
import Post from "../Post/Post";
class MyPosts extends React.Component {
  addPost = () => {
    this.props.addPost();
  };
  componentDidMount() {}
  render() {
    let posts = this.props.posts.map((post) => (
      <Post
        image={post.image}
        message={post.message}
        numberOfLikes={post.numberOfLikes}
      />
    ));
    let newPostElement = React.createRef();
    let updatePost = () => {
      let newPostText = newPostElement.current.value;
      this.props.updateNewPostText(newPostText);
    };
    return (
      <div className="posts">
        <p>Posts</p>
        <textarea
          onChange={updatePost}
          ref={newPostElement}
          value={this.props.newPostText}
        ></textarea>
        <button onClick={this.addPost}>Add</button>
        {this.props.posts !== null ? (
          <div className="posts__container">{posts}</div>
        ) : (
          <div className="posts__container"></div>
        )}
      </div>
    );
  }
}
export default MyPosts;
