import { BrowserRouter, Routes, Route } from "react-router-dom";
import Interview from "./pages/Interview";
import InterviewSession from "./pages/InterviewSession";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Interview />} />
        <Route path="/session" element={<InterviewSession />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;