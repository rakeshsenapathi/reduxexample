import { FETCH_POSTS, NEW_POST } from "../actions/types";

export const fetchPosts = () => dispatch => {
  console.log("Fetching");
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  console.log("Fetching");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
