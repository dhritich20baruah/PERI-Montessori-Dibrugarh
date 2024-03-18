import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="md:fixed z-10 top-0">
        <Navbar />
      </div>
      <div className="hero h-[100vh] relative">
        <div className="absolute md:top-56 md:left-36 top-16 left-10">
          <p className="text-4xl font-semibold">
            Welcome to{" "}
            <span className="text-orange-700 text-5xl">PERI Montessori</span>
          </p>
          <p className="text-3xl">Empowering Educators, Inspiring Futures.</p>
        </div>
        <div className="w-20 h-20 bg-gradient-to-tr from-yellow-600 to-yellow-200 rounded-full top-36 right-36 absolute hover:animate-pulse hidden md:flex"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-orange-600 to-orange-200 rounded-full md:top-64 md:right-64 top-[35rem] left-5 absolute hover:animate-pulse"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-green-600 to-green-200 rounded-full md:top-96 md:left-36 top-72 right-5 absolute hover:animate-pulse"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-cyan-600 to-cyan-200 rounded-full top-[30rem] right-96 absolute hover:animate-pulse hidden md:flex"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-rose-700 to-rose-200 rounded-full top-96 right-36 absolute hover:animate-pulse hidden md:flex"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-red-800 to-red-300 rounded-full top-96 right-[50%] absolute hover:animate-pulse hidden md:flex"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-indigo-700 to-indigo-200 rounded-full top-80 left-96 absolute hover:animate-pulse hidden md:flex"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-blue-700 to-blue-200 rounded-full top-36 left-[50%] absolute hover:animate-pulse hidden md:flex"></div>
        <Image
          src="/peri7.jpg"
          alt="PERI"
          width={500}
          height={500}
          className="w-56 h-56 rounded-full md:top-96 md:left-[50%] top-80 left-5 absolute object-cover"
        />
        <Image
          src="/peri1.jpg"
          alt="PERI"
          width={500}
          height={500}
          className="w-56 h-56 rounded-full md:top-44 md:right-96 top-96 right-5 absolute object-cover"
        />
      </div>

      <div className="message md:flex md:flex-row flex-col">
        <div className="p-10 md:w-1/2 mx-auto">
          <h1 className="text-2xl font-semibold text-orange-700">Our Aim</h1>
          <p className="my-5 text-lg text-justify">
            To provide Montessori teacher training for adult women seeking
            specialized techniques to foster intellectual growth and gain
            insights into child psychology. Our program not only prepares
            trainees for employment opportunities in existing schools but also
            supports young mothers in nurturing their children with positivity
            and effectiveness.
          </p>
          <p className="my-5 text-lg text-justify">
            We aim to equip these educators with comprehensive technical and
            practical knowledge to establish their own pre-primary and primary
            schools. Our student-centered approach ensures a deep understanding
            of Montessori methodology, empowering trainees to confidently tackle
            teacher interviews. Graduates emerge with managerial and technical
            proficiency, empowering them to start their own preschools and
            address unemployment challenges.
          </p>
        </div>
        <div className="p-10 md:w-1/2 flex justify-center">
          <Image
            src="/peri-h.jpg"
            alt=""
            width={500}
            height={500}
            className="shadow-lg shadow-black"
          />
        </div>
      </div>

      <div className="courses min-h-full flex md:flex-row flex-col p-10">
      <div className="m-5 w-1/2 flex justify-center">
        <Image
            src="/peri5.jpg"
            alt=""
            width={500}
            height={500}
            className="shadow-lg shadow-black rounded-2xl border-4 border-green-500"
          />
        </div>
        <div className="m-5 w-1/2 space-y-5">
          <h1 className="font-bold text-2xl text-orange-600">Our Course</h1>
          <h2 className="text-xl font-semibold">ELIGIBILITY FOR ADMISSION</h2>
          <p className="text-lg">
            Female candidates of age 18 years and above and have passed their
            class XII examination or equivalent are eligible for admission.
          </p>
          <h2 className="text-xl font-semibold">COURSE STRUCTURE AND DURATION:</h2>
          <ul className="text-lg text-justify">
            <li><span className="text-orange-600 font-bold">&#x2713;</span> 
            Advance diploma in pre-primary and primary teachers training Course
            duration: One year 
            </li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> 
            Diploma in Montessori (pre-primary) Teachers Training Course duration: Six Months
            </li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> 
            Certificate course in Montessori Teachers Training Course duration: Three months 
            </li>            
          </ul>
        </div>       
      </div>

      <div className="courses min-h-full flex md:flex-row flex-col p-10">
        <div className="my-5 w-1/2 space-y-5 mx-10">
          <h1 className="font-bold text-2xl text-orange-600">Course Content</h1>
          <h2 className="text-xl font-semibold">Theory Papers:</h2>
          <ul className="text-lg text-justify">
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Principles of Education</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Child Psychology</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> School organization and administration</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Montessori method & Philosophy</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Early Childhood care and Education</li>
          </ul>
          <h2 className="text-xl font-semibold">Practical Papers:</h2>
          <ul className="text-lg text-justify">
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Demonstration and Explanation of the Montessori Apparatus</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> General Methods of Teaching</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Geometry Nomenclature</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Botany and Zoology nomenclature</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Environmental Science</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Basic Arithematic</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Rhymes & Story Telling</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> General Knowledge</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Basic English & Phonetics</li>
            <li><span className="text-orange-600 font-bold">&#x2713;</span> Psychology Projects</li>
          </ul>
        </div>
        <div className="m-5 w-1/2 flex justify-center">
        <Image
            src="/peri4.jpg"
            alt=""
            width={500}
            height={500}
            className="shadow-lg shadow-black rounded-2xl border-4 border-amber-600 object-cover"
          />
        </div>
      </div>
    </main>
  );
}
