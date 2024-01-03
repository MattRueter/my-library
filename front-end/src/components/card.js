const example={
    title:"My Very Long Book Title To See If it Fits and to Optimize for Large Titles.",
    author:"Robert Matthew Rueter",
    language:"Spanish",
    status:"read"
}
const Card = () => {
    return(
        <div className="border border-black m-1 flex flex-col justify-around h-60 p-2 text-xs ">
            <div>
                <h2 className="text-blue-500">Title:</h2>
                <p>{example.title}</p>
            </div>

            <div>
                <p className="text-blue-500"> Author:</p>
                <p>{example.author} </p>
            </div>

            <div>
                <p className="text-blue-500">Language:</p>
                <p>{example.language} </p>
            </div>

            <div>
                <p className="text-blue-500">Status:</p>
                <p>{example.status} </p>
            </div>
            <div className="flex justify-end">
                <div className="m-1">X</div>
                <div className="m-1">X</div>
            </div>
        </div>
    )
}
export default Card;