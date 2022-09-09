import { UseState } from "./components/UseState";
import { ClassState } from "./components/ClassState";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
