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
import Tour from "./pages/Tour";
import Merch from "./pages/Merch";
import Blog from "./pages/Blog";
import CreateNews from './pages/CreateNews';



const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NewsUpdater />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="blog" element={<Blog />} />
        <Route path="merch" element={<Merch />} />
        <Route path="tour" element={<Tour />} />
        <Route path="admin" element={<AdminPanel />} />
        <Route path="admin/create_news_post" element={<CreateNews />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
