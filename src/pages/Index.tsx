
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Book, Calendar, MessageSquare, Sparkles, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-kenya-green/80 to-kenya-green py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                AI-Powered Assistant for Young Kenyan Entrepreneurs
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Discover business opportunities, get answers to local business questions, and connect 
                with resources, events, and networks across Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-kenya-green hover:bg-gray-100">
                  <Link to="/onboarding" className="flex items-center">
                    Get Started <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/chat">Try AI Assistant</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                  <div className="bg-kenya-green/10 p-2 rounded-full">
                    <Sparkles size={24} className="text-kenya-green" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">MeshAI Assistant</h3>
                    <p className="text-sm text-gray-500">AI-powered business guidance</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="bg-gray-100 p-3 rounded-lg text-sm">
                    How do I register a business in Nairobi?
                  </div>
                  <div className="bg-kenya-green/10 p-3 rounded-lg text-sm">
                    To register a business in Nairobi, you need to follow these steps:
                    <ol className="list-decimal pl-4 mt-2 space-y-1">
                      <li>Business name search at the Registrar of Companies</li>
                      <li>Business registration application</li>
                      <li>Pay registration fees</li>
                      <li>Obtain KRA PIN certificate</li>
                      <li>Apply for necessary permits</li>
                    </ol>
                  </div>
                </div>
                <div className="pt-3 border-t">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ask about starting a business..."
                      className="w-full p-3 pr-10 border rounded-md"
                    />
                    <Button size="sm" className="absolute right-1 top-1 bg-kenya-green">
                      <ArrowRight size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Empowering Your Entrepreneurship Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MeshAI provides all the tools, resources, and connections you need to start and grow your business in Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="bg-kenya-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="text-kenya-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-gray-600 mb-4">
                Get instant answers to your business questions, tailored to the Kenyan context and regulations.
              </p>
              <Link to="/chat" className="text-kenya-green font-medium flex items-center">
                Chat with AI <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="bg-kenya-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-kenya-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Opportunity Finder</h3>
              <p className="text-gray-600 mb-4">
                Discover funding opportunities, grants, competitions, and more, filtered to match your interests.
              </p>
              <Link to="/opportunities" className="text-kenya-green font-medium flex items-center">
                Find Opportunities <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="bg-kenya-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-kenya-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Events & Networking</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest entrepreneurship events, workshops, and meetups across Kenya.
              </p>
              <Link to="/events" className="text-kenya-green font-medium flex items-center">
                Explore Events <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="bg-kenya-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Book className="text-kenya-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning Toolkit</h3>
              <p className="text-gray-600 mb-4">
                Access guides, templates, and resources for common entrepreneurial tasks in Kenya.
              </p>
              <Link to="/resources" className="text-kenya-green font-medium flex items-center">
                Access Resources <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="bg-kenya-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-kenya-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Matcher</h3>
              <p className="text-gray-600 mb-4">
                Find potential co-founders, mentors, or partners matched to your business needs.
              </p>
              <span className="text-gray-400 flex items-center">
                Coming Soon <ArrowRight size={16} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Entrepreneurship Journey?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join MeshAI Kenya Connect today and access all the tools, resources, and connections 
              you need to turn your business idea into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-kenya-green hover:bg-kenya-green/90">
                <Link to="/onboarding">Create Free Account</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/chat">Try AI Assistant First</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials would go here in a future iteration */}
    </div>
  );
};

export default Index;
