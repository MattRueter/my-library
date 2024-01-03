import Card from "@/components/card";

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
          <section>
            <p>Sort</p>
            <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1">Title</button>
            <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1">Author</button>
            <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1">Status</button>
            <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1">Language</button>
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