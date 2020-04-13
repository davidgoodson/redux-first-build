import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../redux/actions/postActions";

class PostForm extends Component {
  state = {
    title: "",
    body: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost({ post });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Title</label>
          <br />
          <input type="text" name="title" onChange={this.handleOnChange} />
          <br />
          <br />
          <label>Body</label>
          <br />
          <textarea name="body" onChange={this.handleOnChange} />
          <br />
          <br />
          <input type="submit" value="Save Post" />
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
