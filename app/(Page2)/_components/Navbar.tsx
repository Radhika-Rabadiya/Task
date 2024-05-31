import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full p-4 gap-x-4 h-20 z-30 bg-[#e7dfd9] border-b border-b-white fixed top-0 left-0 flex items-center justify-center">
      <Link
        className="hover:text-white cursor-pointer transition-colors duration-300 ease-out hover:underline"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className="hover:text-white cursor-pointer transition-colors duration-300 ease-out hover:underline"
        href={"/admin"}
      >
        Page-2
      </Link>
    </div>
  );
};

export default Navbar;
