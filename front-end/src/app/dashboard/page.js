import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

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
    return(
        <>
          <Navbar/>
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