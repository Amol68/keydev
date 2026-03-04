export default function Hero() {
  return (
    <section className="px-5 md:px-10  py-8 mt-8 w-full  md:max-w-6xl ">
      
      <p className="text-xs tracking-[0.3em] text-gray-400 mb-6 ">
        SOFTWARE ENGINEER
      </p>

      <h1 className="text-3xl md:text-5xl font-bold mb-6 ">
        Amol Kadam
      </h1>

      <p className="text-gray-400 md:text-md text-sm max-w-xl leading-relaxed tracking-wider mb-8">
       Frontend Focused Engineer  experience building and scaling production-grade React apps. I ship clean interfaces and learn in public.
      </p>

      <div className="flex gap-6 text-sm tracking-widest">
        <a href="https://x.com/ak_eins" className="hover:text-gray-400">X</a>
        <a href="https://github.com/Amol68" className="hover:text-gray-400">GITHUB</a>
        <a href="/resume.pdf" className="hover:text-gray-400">RESUME</a>
         <a href="https://www.linkedin.com/in/amol68/" className="hover:text-gray-400">LINKEDIN</a>
      </div>

    </section>
  );
}