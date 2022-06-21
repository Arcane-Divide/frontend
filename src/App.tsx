import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import darkTheme from "./theme/darkTheme";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import News from "./pages/News";
import NewsUpdater from "./store/news/newsUpdater";
import AdminPanel from "./pages/AdminPanel";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NewsUpdater />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="blog" element={""} />
        <Route path="merch" element={""} />
        <Route path="tour" element={""} />
        <Route path="admin" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
