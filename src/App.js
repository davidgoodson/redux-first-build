import React from "react";
import "./App.css";
import Posts from "./components/posts";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
