import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TasksList from "./components/TasksList.js";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TasksList />
      </div>
    </Provider>
  );
}

export default App;