
export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    {
      name: "Experience",
      href: "/experience",
    },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blogs" },
  ];
  return (
    <nav className="flex flex-col md:flex-row gap-4 bg-gray-950 md:gap-0 justify-between items-center px-30 py-10 text-sm tracking-widest">
      <span className="font-semibold text-lg ">KeyDev</span>


  <div className="space-x-8  text-sm! flex">

       {links.map((link) => {
        
        return (
           <a key={link.name}  href={link.href} className=" text-gray-400" >
       {link.name}
        </a>
        
        );
      })}
  </div>



    </nav>
  );
}
