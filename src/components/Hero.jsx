const Hero = () => {
  return (
<section
  id="home"
  className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
>

      <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
        Hi, I'm Devang Katarkar
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-6">
        I'm a software developer who loves building fast, scalable, and
        user-friendly web apps using React and Python.
      </p>
      <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-400 mb-4 animate-fade-in-up"></h1>
      <a
        href="#projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
      >
        View My Work
      </a>
      <a
  href="/resume.pdf"  // Place your actual file in public/
  download
  className="border-slate-500 hover:border-blue-400 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-blue-400/10"
>
  Download Resume
</a>
    </section>
  );
};

export default Hero;
