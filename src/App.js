import { UseState } from "./components/UseState";
import { ClassState } from "./components/ClassState";

import "./App.css";
import { UseReducer } from "./components/UseReducer";

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
      <UseReducer name="UseReducer" />
    </div>
  );
}

export default App;
