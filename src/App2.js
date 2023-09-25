import React from "react";
import About from"./about/about";
import Main from "./main/main";
import Contact from "./contact/contact";
import Error from "./error/error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
