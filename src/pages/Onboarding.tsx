
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

interface OnboardingFormData {
  name: string;
  email: string;
  age: string;
  county: string;
  industry: string;
  stage: string;
}

const Onboarding = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<OnboardingFormData>();

  const counties = [
    "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Nyeri", "Machakos",
    "Meru", "Kakamega", "Kisii", "Garissa", "Lamu", "Kericho", "Kiambu"
  ];

  const industries = [
    "Technology", "Agriculture", "Fashion", "Food & Beverage", "Education",
    "Healthcare", "Tourism", "Retail", "Manufacturing", "Financial Services",
    "Media & Entertainment", "Transport & Logistics", "Real Estate", "Other"
  ];

  const businessStages = [
    "Idea Stage", "Early Stage", "Growth Stage", "Scaling"
  ];

  const onSubmit = async (data: OnboardingFormData) => {
    setIsSubmitting(true);
    try {
      // Here we would connect to a database to store the user profile
      console.log("User profile data:", data);
      
      // For now, we'll simulate a successful submission
      setTimeout(() => {
        toast({
          title: "Profile created!",
          description: "Your entrepreneur profile has been created successfully.",
        });
        navigate("/chat");
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem creating your profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border">
          <h1 className="text-2xl font-bold mb-6 text-center">Create Your Entrepreneur Profile</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                {...register("age", { 
                  required: "Age is required",
                  min: {
                    value: 18,
                    message: "You must be at least 18 years old"
                  },
                  max: {
                    value: 99,
                    message: "Please enter a valid age"
                  }
                })}
                className={errors.age ? "border-red-500" : ""}
              />
              {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="county">County/City</Label>
              <Select 
                onValueChange={(value) => setValue("county", value)}
              >
                <SelectTrigger className={errors.county ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select your county or city" />
                </SelectTrigger>
                <SelectContent>
                  {counties.map((county) => (
                    <SelectItem key={county} value={county}>
                      {county}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.county && <p className="text-red-500 text-sm">{errors.county.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Business Industry</Label>
              <Select 
                onValueChange={(value) => setValue("industry", value)}
              >
                <SelectTrigger className={errors.industry ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.industry && <p className="text-red-500 text-sm">{errors.industry.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="stage">Business Stage</Label>
              <Select 
                onValueChange={(value) => setValue("stage", value)}
              >
                <SelectTrigger className={errors.stage ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select your business stage" />
                </SelectTrigger>
                <SelectContent>
                  {businessStages.map((stage) => (
                    <SelectItem key={stage} value={stage}>
                      {stage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.stage && <p className="text-red-500 text-sm">{errors.stage.message}</p>}
            </div>

            <Button 
              type="submit" 
              className="w-full bg-kenya-green hover:bg-kenya-green/90" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Profile..." : "Create Profile"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
