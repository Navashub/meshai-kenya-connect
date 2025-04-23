
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, MonitorPlay, TrendingUp, Users } from "lucide-react";
import { Opportunity } from "@/types/opportunity";

interface OpportunityCardProps {
  opportunity: Opportunity;
  getTypeIcon: (type: string) => JSX.Element;
  getTypeColor: (type: string) => string;
  formatDate: (dateString: string) => string;
}

const OpportunityCard = ({
  opportunity,
  getTypeIcon,
  getTypeColor,
  formatDate,
}: OpportunityCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-52 w-full overflow-hidden relative">
        <img
          src={opportunity.imageUrl}
          alt={opportunity.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>
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
  );
};

export default OpportunityCard;
