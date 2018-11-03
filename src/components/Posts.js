import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

import "../App.css";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id} className="Post">
        {" "}
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStatetoProps,
  { fetchPosts }
)(Posts);
