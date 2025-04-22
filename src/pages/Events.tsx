
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Event {
  id: string;
  title: string;
  organizer: string;
  date: string;
  time: string;
  location: string;
  type: "workshop" | "networking" | "conference" | "hackathon" | "bootcamp";
  description: string;
  attendees: number;
  imageUrl: string;
}

const events: Event[] = [
  {
    id: "1",
    title: "Nairobi Tech Week",
    organizer: "iHub Kenya",
    date: "2025-05-15",
    time: "09:00 AM - 05:00 PM",
    location: "iHub, Nairobi",
    type: "conference",
    description: "Kenya's largest tech event bringing together developers, startups, and tech companies for workshops, talks, and networking.",
    attendees: 215,
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "2",
    title: "Women in Business Meetup",
    organizer: "KCB Bank Foundation",
    date: "2025-05-18",
    time: "02:00 PM - 04:30 PM",
    location: "KCB Leadership Centre, Karen",
    type: "networking",
    description: "A networking event for women entrepreneurs to share experiences, challenges, and solutions in the business world.",
    attendees: 85,
    imageUrl: "https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  },
  {
    id: "3",
    title: "Digital Marketing Masterclass",
    organizer: "Safaricom Business",
    date: "2025-05-22",
    time: "10:00 AM - 02:00 PM",
    location: "Radisson Blu, Nairobi",
    type: "workshop",
    description: "Learn the latest digital marketing strategies, tools, and techniques to grow your business online from industry experts.",
    attendees: 65,
    imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "4",
    title: "Fintech Innovation Challenge",
    organizer: "Equity Bank",
    date: "2025-05-28",
    time: "09:00 AM - 04:00 PM",
    location: "Equity Centre, Upper Hill, Nairobi",
    type: "hackathon",
    description: "A hackathon focused on creating innovative solutions for financial inclusion and digital banking in Kenya.",
    attendees: 124,
    imageUrl: "https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "5",
    title: "Agribusiness Entrepreneurship Program",
    organizer: "Kenya Climate Innovation Center",
    date: "2025-06-05",
    time: "08:30 AM - 04:30 PM",
    location: "Strathmore University, Nairobi",
    type: "bootcamp",
    description: "A 1-day intensive bootcamp for entrepreneurs in the agricultural sector focusing on innovation, technology, and sustainable practices.",
    attendees: 45,
    imageUrl: "https://images.unsplash.com/photo-1574943320219-5c76996f73b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "6",
    title: "E-Commerce Growth Strategies Workshop",
    organizer: "Jumia Kenya",
    date: "2025-06-10",
    time: "10:00 AM - 01:00 PM",
    location: "Westlands, Nairobi",
    type: "workshop",
    description: "Learn how to scale your e-commerce business with proven strategies for online sales, marketing, and customer retention.",
    attendees: 78,
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
  }
];

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const today = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) >= today);
  const pastEvents = events.filter(event => new Date(event.date) < today);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "workshop":
        return "bg-blue-100 text-blue-800";
      case "networking":
        return "bg-purple-100 text-purple-800";
      case "conference":
        return "bg-green-100 text-green-800";
      case "hackathon":
        return "bg-orange-100 text-orange-800";
      case "bootcamp":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Events & Networking</h1>
          <p className="text-gray-600 mb-8">
            Stay updated with the latest entrepreneurship events and meetups across Kenya.
          </p>

          <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="upcoming" className="px-6">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past" className="px-6">Past Events</TabsTrigger>
              </TabsList>

              <div className="hidden md:flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>

            <TabsContent value="upcoming" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className={`${getEventTypeColor(event.type)} capitalize`}>
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="pt-4">
                        <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                        <p className="text-gray-500 text-sm mb-3">
                          {event.organizer}
                        </p>
                        
                        <div className="space-y-2 text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-gray-500" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-gray-500" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-gray-500" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={16} className="text-gray-500" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 text-sm line-clamp-3">
                          {event.description}
                        </p>
                      </CardContent>
                      
                      <CardFooter className="pt-0 flex justify-between">
                        <Button variant="outline">View Details</Button>
                        <Button className="bg-kenya-green hover:bg-kenya-green/90">RSVP</Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <h3 className="text-lg font-medium mb-2">No upcoming events</h3>
                    <p className="text-gray-500">
                      Check back soon for new events or view past events.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="past" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.length > 0 ? (
                  pastEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden opacity-80">
                      <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
                          <Badge variant="secondary">Completed</Badge>
                        </div>
                        <img 
                          src={event.imageUrl} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 z-20">
                          <Badge className={`${getEventTypeColor(event.type)} capitalize`}>
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="pt-4">
                        <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                        <p className="text-gray-500 text-sm mb-3">
                          {event.organizer}
                        </p>
                        
                        <div className="space-y-2 text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-gray-500" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-gray-500" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 text-sm line-clamp-3">
                          {event.description}
                        </p>
                      </CardContent>
                      
                      <CardFooter className="pt-0">
                        <Button variant="outline" className="w-full">
                          View Summary & Resources
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <h3 className="text-lg font-medium mb-2">No past events</h3>
                    <p className="text-gray-500">
                      Past events will appear here after they've concluded.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 p-8 bg-kenya-pattern rounded-lg border">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Want to host an event?</h2>
              <p className="text-gray-700 mb-6">
                If you're organizing an entrepreneurship event in Kenya, let us know and 
                we'll help you reach our community of entrepreneurs.
              </p>
              <Button className="bg-kenya-green hover:bg-kenya-green/90">
                Submit Your Event
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
