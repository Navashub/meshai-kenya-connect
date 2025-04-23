
export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: "funding" | "training" | "job" | "competition";
  location: string;
  deadline: string;
  industries: string[];
  description: string;
  url: string;
  imageUrl: string;
}
