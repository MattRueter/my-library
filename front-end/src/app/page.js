import Image from 'next/image'
import myBooks from '../../public/myBooks.svg';

export default function Home() {
  return (
    <div className="landingPage">
      <Image 
        className="border-4 border-black"
        src={myBooks}
        alt="bookshelve image"
        width={400}
        height={400}
        priority
      />
      <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1">Register</button>
      <button className="border-2 border-black rounded-md bg-red-300 p-2 m-1">Login</button>
    </div>
  )
}
