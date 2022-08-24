import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Dictionary, Configure } from './routes'
 
 
 export default function App(){


  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dictionary />} />
        <Route path="/configure" element={<Configure />} />
        
      </Routes>
    </BrowserRouter>
  )

 }