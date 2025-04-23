import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Filter, MapPin, MonitorPlay, Search, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: "funding" | "training" | "job" | "competition";
  location: string;
  deadline: string;
  industries: string[];
  description: string;
  url: string;
}

const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Youth Enterprise Development Fund",
    organization: "Government of Kenya",
    type: "funding",
    location: "Nationwide",
    deadline: "2025-05-30",
    industries: ["All Industries"],
    description: "Low-interest loans from KSh 50,000 to KSh 5 million for youth-owned businesses. Applications accepted year-round.",
    url: "#"
  },
  {
    id: "2",
    title: "Digital Skills Training Program",
    organization: "iHub Kenya",
    type: "training",
    location: "Nairobi",
    deadline: "2025-05-15",
    industries: ["Technology", "Digital Marketing"],
    description: "Free 8-week intensive training on digital skills including web development, digital marketing, and data analysis.",
    url: "#"
  },
  {
    id: "3",
    title: "E-Commerce Manager",
    organization: "Jumia Kenya",
    type: "job",
    location: "Nairobi",
    deadline: "2025-05-10",
    industries: ["E-commerce", "Retail"],
    description: "Full-time position for an E-Commerce Manager to oversee online retail operations and strategy.",
    url: "#"
  },
  {
    id: "4",
    title: "Anzisha Prize for Young Entrepreneurs",
    organization: "African Leadership Academy",
    type: "competition",
    location: "Pan-African",
    deadline: "2025-06-15",
    industries: ["All Industries"],
    description: "Competition for entrepreneurs aged 15-22 with cash prizes up to $25,000 and business development support.",
    url: "#"
  },
  {
    id: "5",
    title: "Agribusiness Innovation Challenge",
    organization: "Kenya Climate Innovation Center",
    type: "competition",
    location: "Nationwide",
    deadline: "2025-05-25",
    industries: ["Agriculture", "Food Production"],
    description: "Competition for innovative agribusiness solutions with grants up to KSh 2 million for winners.",
    url: "#"
  },
  {
    id: "6",
    title: "Women in Tech Incubator Program",
    organization: "Standard Chartered Bank",
    type: "training",
    location: "Virtual + Nairobi",
    deadline: "2025-06-01",
    industries: ["Technology", "Fintech"],
    description: "12-week incubation program for women-led tech startups with mentorship, resources, and funding opportunities.",
    url: "#"
  },
  {
    id: "7",
    title: "Social Media Specialist",
    organization: "Safaricom",
    type: "job",
    location: "Nairobi",
    deadline: "2025-05-18",
    industries: ["Marketing", "Technology"],
    description: "Part-time position for a creative Social Media Specialist to manage brand presence across platforms.",
    url: "#"
  },
  {
    id: "8",
    title: "Tony Elumelu Foundation Entrepreneurship Programme",
    organization: "Tony Elumelu Foundation",
    type: "funding",
    location: "Pan-African",
    deadline: "2025-07-01",
    industries: ["All Industries"],
    description: "$5,000 seed capital, business training, and mentorship for entrepreneurs across Africa.",
    url: "#"
  },
];

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(undefined);
  const [selectedIndustry, setSelectedIndustry] = useState<string | undefined>(undefined);

  const types = ["funding", "training", "job", "competition"];
  const locations = [...new Set(opportunities.map(opp => opp.location))];
  const industries = [...new Set(opportunities.flatMap(opp => opp.industries))].filter(
    industry => industry !== "All Industries"
  );

  const filtersDialogRef = React.useRef<HTMLDialogElement | null>(null);

  const filteredOpportunities = opportunities.filter(opportunity => {
    if (
      searchTerm &&
      !opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !opportunity.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    if (selectedType && opportunity.type !== selectedType) {
      return false;
    }

    if (selectedLocation && opportunity.location !== selectedLocation) {
      return false;
    }

    if (
      selectedIndustry &&
      !opportunity.industries.includes(selectedIndustry) &&
      !opportunity.industries.includes("All Industries")
    ) {
      return false;
    }

    return true;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "funding":
        return <TrendingUp className="text-blue-500" size={18} />;
      case "training":
        return <MonitorPlay className="text-green-500" size={18} />;
      case "job":
        return <Users className="text-purple-500" size={18} />;
      case "competition":
        return <Calendar className="text-orange-500" size={18} />;
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "funding":
        return "bg-blue-100 text-blue-800";
      case "training":
        return "bg-green-100 text-green-800";
      case "job":
        return "bg-purple-100 text-purple-800";
      case "competition":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedType(undefined);
    setSelectedLocation(undefined);
    setSelectedIndustry(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Opportunity Finder</h1>
          <p className="text-gray-600 mb-8">
            Discover funding, training, jobs, and competitions for Kenyan entrepreneurs.
          </p>

          <div className="bg-white p-4 rounded-lg shadow-sm border mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                <Input
                  placeholder="Search opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => filtersDialogRef.current?.showModal()}
                >
                  <Filter size={16} />
                  <span>Filters</span>
                </Button>

                {(selectedType || selectedLocation || selectedIndustry) && (
                  <Button
                    variant="ghost"
                    className="text-gray-500"
                    onClick={resetFilters}
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            </div>

            {(selectedType || selectedLocation || selectedIndustry) && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedType && (
                  <Badge variant="secondary" className="flex items-center gap-1 py-1 px-3">
                    Type: {selectedType}
                    <button onClick={() => setSelectedType(undefined)} className="ml-1 hover:text-gray-800">
                      &times;
                    </button>
                  </Badge>
                )}
                {selectedLocation && (
                  <Badge variant="secondary" className="flex items-center gap-1 py-1 px-3">
                    Location: {selectedLocation}
                    <button onClick={() => setSelectedLocation(undefined)} className="ml-1 hover:text-gray-800">
                      &times;
                    </button>
                  </Badge>
                )}
                {selectedIndustry && (
                  <Badge variant="secondary" className="flex items-center gap-1 py-1 px-3">
                    Industry: {selectedIndustry}
                    <button onClick={() => setSelectedIndustry(undefined)} className="ml-1 hover:text-gray-800">
                      &times;
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </div>

          <dialog
            id="filtersDialog"
            ref={filtersDialogRef}
            className="modal modal-bottom sm:modal-middle p-4 md:p-0 rounded-lg"
          >
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <h3 className="font-bold text-lg mb-4">Filter Opportunities</h3>

              <div className="space-y-4">
                <div>
                  <label className="font-medium text-sm">Opportunity Type</label>
                  <Select
                    value={selectedType}
                    onValueChange={setSelectedType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Types</SelectItem>
                      {types.map(type => (
                        <SelectItem key={type} value={type}>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="font-medium text-sm">Location (Region)</label>
                  <Select
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Locations</SelectItem>
                      {locations.map(location => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="font-medium text-sm">Industry</label>
                  <Select
                    value={selectedIndustry}
                    onValueChange={setSelectedIndustry}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Industries</SelectItem>
                      {industries.map(industry => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline" onClick={() => { filtersDialogRef.current?.close(); }}>
                  Cancel
                </Button>
                <Button
                  className="bg-kenya-green hover:bg-kenya-green/90"
                  onClick={() => { filtersDialogRef.current?.close(); }}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </dialog>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map((opportunity) => (
                <Card key={opportunity.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge className={`${getTypeColor(opportunity.type)} capitalize`}>
                        <div className="flex items-center gap-1">
                          {getTypeIcon(opportunity.type)}
                          <span>
                            {
                              opportunity.type === "funding"
                                ? "Grant"
                                : opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1)
                            }
                          </span>
                        </div>
                      </Badge>
                    </div>
                    <CardTitle className="mt-2 text-lg">{opportunity.title}</CardTitle>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <span>{opportunity.organization}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-600 text-sm mb-4">{opportunity.description}</p>
                    <div className="flex flex-col space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-500" />
                        <span>{opportunity.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gray-500" />
                        <span>Deadline: {formatDate(opportunity.deadline)}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {opportunity.industries.map((industry) => (
                        <Badge key={industry} variant="outline" className="bg-gray-50">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button asChild className="w-full bg-kenya-green hover:bg-kenya-green/90">
                      <a
                        href={opportunity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-2"
                      >
                        Learn more
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
