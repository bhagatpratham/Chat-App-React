import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Router>
        <Routes>
          <Route path="/" exact element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
