import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import Home from "../pages/home";
import ProductionHouse from "../Components/ProductionHouse";
export default function Router(){
    return(
        <>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Header" element={<Header/>}/>
           <Route path="/Slider" element={<Slider/>}/>
           <Route path="/productionHouse" element={<ProductionHouse/>}/>
        </Routes>
        </>
    )
}