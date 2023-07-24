import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
import ContactUs from "./components/ContactUs";
import VerticalMenu from "./components/VerticalMenu";
import VideoContent from "./components/VideoContent";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Courses from "./components/Courses";
import FirstCourse from "./components/Courses/FirstCourse";
import Aboutus from "./components/Aboutus";
import Compiler from "./components/Compiler";
import { ProtectedRoute } from 'protected-route-react';
import { useSelector } from "react-redux";



function App() {

  const { isAuthenticated } = useSelector(state => state.user)
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="" element={<FirstPage />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/verticalmenu" element={<VerticalMenu />} />
          <Route exact path="/videocontent" element={<VideoContent />} />
          <Route path="/signup" element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/courses" >
              <Signup />
            </ProtectedRoute>

          } />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/login" element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/" >
              <Login />
            </ProtectedRoute>
          } />
          <Route exact path="/firstcourse" element={<FirstCourse />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/compiler" element={<Compiler />} />
        </Routes>
        <Footer />
      </>


    </Router>
  );
}

export default App;
