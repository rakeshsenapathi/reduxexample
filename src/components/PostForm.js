import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h3>Add Form</h3>
        <form>
          <div>
            <label>Title : </label>
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label> Body : </label>
            <textarea
              type="text"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button onClick={this.onSubmit}>Submit</button>
          <br />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createPost }
)(PostForm);
