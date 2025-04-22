
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b shadow-sm sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-kenya-green p-1 rounded-md">
            <span className="font-bold text-white text-xl">MeshAI</span>
          </div>
          <span className="hidden md:inline-block text-kenya-green font-semibold">Kenya Connect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/chat" className="text-gray-700 hover:text-kenya-green transition-colors font-medium">
            AI Assistant
          </Link>
          <Link to="/opportunities" className="text-gray-700 hover:text-kenya-green transition-colors font-medium">
            Opportunities
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-kenya-green transition-colors font-medium">
            Events
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-kenya-green transition-colors font-medium">
            Resources
          </Link>
          <Button className="bg-kenya-green hover:bg-kenya-green/90">Sign In</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 px-4 bg-white border-t animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/chat" 
              className="text-gray-700 hover:text-kenya-green transition-colors font-medium py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Assistant
            </Link>
            <Link 
              to="/opportunities" 
              className="text-gray-700 hover:text-kenya-green transition-colors font-medium py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Opportunities
            </Link>
            <Link 
              to="/events" 
              className="text-gray-700 hover:text-kenya-green transition-colors font-medium py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/resources" 
              className="text-gray-700 hover:text-kenya-green transition-colors font-medium py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Button className="bg-kenya-green hover:bg-kenya-green/90 w-full">Sign In</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
