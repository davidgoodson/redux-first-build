import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import PropTypes from "prop-types";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.newPost) this.props.posts.unshift(newProps.newPost);
  }

  render() {
    return (
      <div>
        {this.props.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPOst: PropTypes.object,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPOst: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
