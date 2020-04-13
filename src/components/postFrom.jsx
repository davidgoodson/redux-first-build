import React, { Component } from "react";

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
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <Label for="title">Title</Label>
          <br />
          <input type="text" name="title" onChange={this.handleOnChange} />
          <br />
          <br />
          <Label for="body">Body</Label>
          <br />
          <textarea name="body" onChange={this.handleOnChange} />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PostForm;
