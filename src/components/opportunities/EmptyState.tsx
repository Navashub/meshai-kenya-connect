
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="col-span-2 text-center py-16">
      <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Search size={24} className="text-gray-400" />
      </div>
      <h3 className="text-lg font-medium mb-1">Coming soon!</h3>
      <p className="text-gray-500 mb-6 max-w-md mx-auto">
        We're working hard to bring new opportunities for young Kenyan entrepreneurs.
        Sign up below to be the first to know when new opportunities are available!
      </p>
      <form className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-sm mx-auto">
        <Input type="email" placeholder="Your email" required />
        <Button type="submit" className="bg-kenya-green hover:bg-kenya-green/90 w-full sm:w-auto">
          Sign up for updates
        </Button>
      </form>
    </div>
  );
};

export default EmptyState;
