import "./App.css";
import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data.js";
import Navbar from "./components/Navbar.js";
import Filter from "./components/Filter.js";
import Spinner from './components/Spinner.js';
import {toast} from "react-toastify";
import Cards from "./components/Cards.js";

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

    const fetchData = async () => {
      setLoading(true);
      try{
        let res = await fetch(apiUrl);
        let output = await res.json();
        //save it to a variable
        setCourses(output.data);
      } catch(err){
        toast.error("Something went wrong");
      }
      setLoading(false);
    } 
    
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div className="flex min-h-screen flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      
      <div>
      <div>
        <Filter 
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div className="w-11/12 max-w-[1200px] flex justify-center mx-auto items-center min-h-[50vh] flex-wrap">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
        }
      </div>
      </div>
      
    </div>
  );
}

export default App;
