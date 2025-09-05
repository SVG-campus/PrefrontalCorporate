import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://raw.githubusercontent.com/SVG-campus/PrefrontalCorporate/refs/heads/main/Prefrontal%20Corporate.png"
              alt="Prefrontal Corporate Logo"
              width={50}
              height={50}
              className="mr-3"
            />
          </Link>
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Prefrontal Corporate
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link href="/research" className="text-gray-600 hover:text-blue-500">Research</Link>
          <a href="https://www.linkedin.com/in/prefrontalcorporate/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">LinkedIn</a>
          <a href="https://github.com/SVG-campus" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">GitHub</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
