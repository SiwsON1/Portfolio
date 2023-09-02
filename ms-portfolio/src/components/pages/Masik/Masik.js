import { Link } from "react-router-dom";
import Transition from "../../features/Transition/Transition";

const Masik = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center text-white relative lg:flex-row ">
      <Transition />
      <section className="xl:absolute xl:left-10 xl:top-20 lg:relative lg:left-auto lg:top-auto mb-10 md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center">
        <div className="xl:text-8xl font-extrabold tracking-tighter lg:text-8xl md:text-6xl sm:text-5xl text-5xl">
          <div>
            <span className="text-gold">Ideas</span>
          </div>
          <div>
            into <span className="text-green-400">Actions</span>
          </div>
          <div>
            and <span className="text-neon">CODE</span>
          </div>
          <div>
            into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
              Applications
            </span>
            .
          </div>
        </div>
      </section>
      <section className="xl:absolute xl:right-20 xl:bottom-1/4 text-center lg:relative lg:right-auto lg:bottom-auto md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center">
        <h1 className="text-xl lg:text-4xl sm:text-xl font-bold">
          Hey, I'm Marcin.
        </h1>
        <p className="text-lg font-medium mb-10">
          A Full-Stack Developer crafting digital solutions.
        </p>
        <Link to="/projects">
          <button className="px-8 py-3 text-2xl bg-transparent text-blue-400 font-semibold rounded-full transition duration-200 ease-in-out hover:bg-neon hover:text-black hover:shadow-neon cursor-pointer">
            See my projects
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Masik;
