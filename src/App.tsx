import { Route, Router, Routes } from "react-router";
import Header from "./Components/Header";

export default function App(){
  return(
    <div>
    <Routes>
      <Route path="/Header" element={<Header/>}/>
    </Routes>
    </div>
  )
}