import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Activity from "@/pages/Activity";
import Discover from "@/pages/Discover";
import Post from "@/pages/Post";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/discover" replace />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;