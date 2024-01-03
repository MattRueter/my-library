import Image from "next/image";
import myBooks2 from '../../../public/myBooks2.svg';

function AuthForm (){
    const clicked ="register"
    let buttonLabel ="";
    if(clicked === "register"){
        buttonLabel ="Register"
    }else{
        buttonLabel = "Login"
    }
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <Image
                src={myBooks2}
                alt="image of books"
                height={200}
                width={200}
                priority
            />

            <form className="border border-black rounded-md flex flex-col p-1 m-5">
                <input className="border border-red-300 m-1 p-1" placeholder="username"></input>
                <input className="border border-red-300 m-1 p-1" placeholder="password"></input>
                <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1">{buttonLabel}</button>
            </form>
        </div>
        
    )
}
export default AuthForm;