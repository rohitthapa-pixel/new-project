import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth= window.innerWidth;
const Slider = () => {
    const [movieList, setMovieList] = useState([])
    const elementRef= useRef();
    // Fetch trending videos on component mount
    useEffect(() => {

        const fetchTrending = async () => {
            try {
                const resp = await GlobalApi.getTrendingVideos();
                console.log(resp.data.results); // Array of trending movies
                setMovieList(resp.data.results)
            } catch (error) {
                console.error("Error fetching trending videos:", error);
            }
        };

        fetchTrending();
    }, []);
    const sliderRight=(element:any)=>{
         element.scrollBy({ left: screenWidth-110, behavior: "smooth" })
    }
    const sliderLeft=(element:any)=>{
         element.scrollBy({ left: -screenWidth-110, behavior: "smooth" })
    }

    return (
        <div>
            <FaChevronLeft className=" hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer" onClick={()=>sliderLeft(elementRef.current)} />
            <FaChevronRight className=" hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0" onClick={()=>sliderRight(elementRef.current)}/>
       

        <div className="flex overflow-x-auto w-full px-16 py-4 bg-gray-800 scrollbar-hide scroll-smooth" ref={elementRef}>

            {movieList.map((item) => (
                <img src={IMAGE_BASE_URL + item.backdrop_path} className="min-w-full md:h-[410px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-500 transition-all duration-100 ease-in" />
            ))}
        </div>
         </div>
    )
};

export default Slider;
