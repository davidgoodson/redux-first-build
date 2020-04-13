import React, { Component } from "react";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
