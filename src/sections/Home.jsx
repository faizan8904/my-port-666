import profileImg from "../assets/thor.jpg";
import { FiDownload } from "react-icons/fi";

function Home() {
  return (
    <section
      id="#home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row gap-9 lg:gap-15 "
    >
      <div className="text-center   h-full z-10 px-4">
        <img
          className="w-[200px] border-0 mt-20 rounded-md shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[250px] object-cover object-bottom hover:translate-y-1 transition-all "
          src={profileImg}
          alt="Profile Image"
        />
      </div>
      <div className="text-center font-mono z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w[500px] font-semibold mb-6 px-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600  bg-clip-text text-transparent leading-right ">
          Chris Hemsworth
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
        I’m a full-stack developer passionate about crafting interactive, scalable web applications with dynamic UI, robust performance, and seamless UX.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            className="bg-gradient-to-r flex-nowrap items-center  flex flex-row from-cyan-500 to-purple-600 py-3 px-6 rounded hover:-translate-y-1   hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]  font-medium transition relative overflow-hidden"
            href="#contact"
          >
           <span className="whitespace-nowrap">Contact Me</span>
          </a>
          <a
            className="bg-gradient-to-r flex flex-row from-cyan-500 to-purple-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]  font-medium transition relative overflow-hidden "
            href="#"
            download
          >
            <p>Resume </p>
            <span className="h-5 ml-3 text-2xl text-white">
              <FiDownload />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
