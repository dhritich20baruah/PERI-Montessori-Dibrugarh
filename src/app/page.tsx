import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="hero h-[100vh] relative">
        <div className="absolute md:top-56 md:left-36 top-16 left-10 z-10">
          <p className="text-4xl font-semibold">
            Welcome to <span className="text-orange-700 text-5xl">PERI Montessori</span>
          </p>
          <p className="text-3xl">Empowering Educators, Inspiring Futures.</p>
        </div>
        <div className="w-20 h-20 bg-gradient-to-tr from-yellow-600 to-yellow-200 rounded-full top-36 right-36 absolute hover:animate-pulse hidden md:flex"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-orange-600 to-orange-200 rounded-full md:top-64 md:right-64 top-[35rem] left-5 absolute hover:animate-pulse"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-green-600 to-green-200 rounded-full md:top-96 md:left-36 top-72 right-5 absolute hover:animate-pulse"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-cyan-600 to-cyan-200 rounded-full top-[30rem] right-96 absolute hover:animate-pulse hidden md:flex"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-red-800 to-red-300 rounded-full top-96 right-[50%] absolute hover:animate-pulse hidden md:flex"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-indigo-700 to-indigo-200 rounded-full top-80 left-96 absolute hover:animate-pulse hidden md:flex"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-blue-700 to-blue-200 rounded-full top-36 left-[50%] absolute hover:animate-pulse hidden md:flex"></div> 
        <Image src="/peri7.jpg" alt="PERI" width={500} height={500} className="w-56 h-56 rounded-full md:top-96 md:left-[50%] top-80 left-5 absolute object-cover"/>
        <Image src="/peri1.jpg" alt="PERI" width={500} height={500} className="w-56 h-56 rounded-full md:top-44 md:right-96 top-96 right-5 absolute object-cover"/>
      </div>

      <div className="message">
        <div>
          <h1>Our Aim</h1>
          <p>To provide Montessori teacher training for adult women seeking specialized techniques to foster intellectual growth and gain insights into child psychology. Our program not only prepares trainees for employment opportunities in existing schools but also supports young mothers in nurturing their children with positivity and effectiveness.
          </p>
          <p>   
          We aim to equip these educators with comprehensive technical and practical knowledge to establish their own pre-primary and primary schools. Our student-centered approach ensures a deep understanding of Montessori methodology, empowering trainees to confidently tackle teacher interviews. Graduates emerge with managerial and technical proficiency, empowering them to start their own preschools and address unemployment challenges.</p>
        </div>
      </div>
    </main>
  );
}
