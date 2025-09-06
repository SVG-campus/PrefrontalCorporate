import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://raw.githubusercontent.com/SVG-campus/PrefrontalCorporate/refs/heads/main/Prefrontal%20Corporate.png"
              alt="Prefrontal Corporate Logo"
              width={40}
              height={40}
              className="mr-3"
            />
          </Link>
          <Link href="/" className="text-xl font-bold text-gray-800">
            Prefrontal Corporate
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/research">All Research</Link>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://www.linkedin.com/in/prefrontalcorporate/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://github.com/SVG-campus" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://orcid.org/0009-0004-9601-5617" target="_blank" rel="noopener noreferrer">ORCID</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
