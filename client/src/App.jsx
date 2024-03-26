import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./components/Header";
import CreateList from "./pages/CreateList";
import Mylistings from "./pages/Mylistings";
import SingleList from "./pages/SingleList";
import Search from "./pages/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mylistings" element={<Mylistings/>} />
        <Route path="/listing" element={<CreateList />} />
        <Route path="listing/:id" element={<SingleList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search/>} />
        

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
