import React from "react";
import "./App.css";
import Posts from "./components/posts";
import store from "./redux/store";
import { Provider } from "react-redux";
import PostForm from "./components/postForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Add Post</h2>
        <PostForm />
        <hr />
        <h2>Posts</h2>
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
