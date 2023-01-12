import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AddVideo from "./components/AddVideo";
import History from "./components/History";
import Edit from "./components/Edit";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/addvideo" element={<AddVideo />} />
        <Route exact path="/editvideo/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
