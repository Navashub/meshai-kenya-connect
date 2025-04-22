
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="bg-kenya-green/10 inline-flex p-3 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-kenya-green"
            >
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
              <path d="M13 2v7h7"></path>
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-medium mb-3">Page not found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              variant="outline" 
              className="flex-1 sm:flex-none"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
            <Button 
              className="flex-1 sm:flex-none bg-kenya-green hover:bg-kenya-green/90" 
              asChild
            >
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 space-y-1">
          <p>Looking for something specific?</p>
          <p>Try navigating through the main menu or use our AI assistant for help.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
