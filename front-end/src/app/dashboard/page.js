"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Form from "@/components/Form";

const example=[
  {
    title:"My Very Long Book Title To See If it Fits and to Optimize for Large Titles.",
    author:"Robert Matthew Rueter von Helsing Schweitzerdreng",
    language:"Spanish",
    status:"not read"
  },
  {
    title:"My Somewhat Long Book Title.",
    author:"Robert Matthew Rueter von Helsing",
    language:"Spanish",
    status:"read"
  },
  {
    title:"My Short Title",
    author:"Robert Matthew Rueter",
    language:"Spanish",
    status:"read"
  },
]


function Dashboard (){
  const [ formDisplay, setFormDisplay ] = useState("hidden");

  const toggleForm = () => {
    if(formDisplay === "hidden"){
      setFormDisplay("block")
    }else{
      setFormDisplay("hidden")
    }
  }

    return(
        <>
          <Navbar/>
          <section >
            <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1 text-xs sm:text-sm" onClick={toggleForm}>+</button>
            <div className={formDisplay}>
              <Form/>
            </div>
          </section>
          <section>
            <p>Sort</p>
            <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1 text-xs sm:text-sm">Title</button>
            <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1 text-xs sm:text-sm">Author</button>
            <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1 text-xs sm:text-sm">Status</button>
            <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1 text-xs sm:text-sm">Language</button>
          </section>
          <ul>
            {example.map((book, index ) =>(
              <Card key={index} bookInfo={book} />
            ))}
          </ul>
        </>
    )
}
export default Dashboard;