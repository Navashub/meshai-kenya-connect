
import React from "react";
import { Calendar, MonitorPlay, TrendingUp, Users } from "lucide-react";

export const getTypeIcon = (type: string) => {
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

export const getTypeColor = (type: string) => {
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

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};
