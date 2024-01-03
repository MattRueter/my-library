const Form = () => {
    return(
        <form className="border border-black rounded-md flex flex-col p-1 m-5">
            <input className="border border-red-300 m-1 p-1" placeholder="Title"></input>
            <input className="border border-red-300 m-1 p-1" placeholder="Author"></input>
            <input className="border border-red-300 m-1 p-1" placeholder="Language"></input>
            <input className="border border-red-300 m-1 p-1" placeholder="Status"></input>
            <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1">Save</button>
        </form>
    )   
}
export default Form;