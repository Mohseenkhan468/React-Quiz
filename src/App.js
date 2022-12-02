import React from 'react'
import Home from './Home'
import Quiz from './Quiz';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App(){
  return(
   <BrowserRouter>
   <Routes>
      <Route index element={<Home/>}/>
      <Route path="quiz" element={<Quiz/>} />
   </Routes>
   </BrowserRouter>
  )
}