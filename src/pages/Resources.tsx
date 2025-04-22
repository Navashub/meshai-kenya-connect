
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Calendar, 
  Download, 
  ExternalLink, 
  FileText, 
  Search,
  Bookmark,
  CheckCircle2,
  Copy
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "@/components/ui/use-toast";

interface Resource {
  id: string;
  title: string;
  category: "guide" | "template" | "video" | "checklist";
  description: string;
  isPremium: boolean;
  url: string;
  thumbnailUrl?: string;
  tags: string[];
}

const resources: Resource[] = [
  {
    id: "1",
    title: "How to Register a Business in Kenya",
    category: "guide",
    description: "A comprehensive guide to registering your business in Kenya, including sole proprietorships, partnerships, and limited companies.",
    isPremium: false,
    url: "#",
    tags: ["Legal", "Registration", "Business Setup"]
  },
  {
    id: "2",
    title: "Kenya Business Taxes Explainer",
    category: "guide",
    description: "Understanding KRA tax requirements for businesses including VAT, income tax, and withholding tax obligations.",
    isPremium: false,
    url: "#",
    tags: ["Taxes", "KRA", "Compliance"]
  },
  {
    id: "3",
    title: "Business Pitch Deck Template",
    category: "template",
    description: "A customizable pitch deck template designed specifically for Kenyan startups seeking funding.",
    isPremium: false,
    url: "#",
    thumbnailUrl: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["Pitch Deck", "Fundraising", "Presentation"]
  },
  {
    id: "4",
    title: "Financial Projection Spreadsheet",
    category: "template",
    description: "A 3-year financial projection template with pre-built formulas for Kenyan entrepreneurs.",
    isPremium: true,
    url: "#",
    thumbnailUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1826&q=80",
    tags: ["Finance", "Planning", "Projections"]
  },
  {
    id: "5",
    title: "Business Plan Template",
    category: "template",
    description: "A comprehensive business plan template tailored for Kenyan entrepreneurs.",
    isPremium: false,
    url: "#",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["Business Plan", "Strategy", "Planning"]
  },
  {
    id: "6",
    title: "Digital Marketing for Kenyan Businesses",
    category: "video",
    description: "A comprehensive video course on digital marketing strategies for businesses operating in Kenya.",
    isPremium: true,
    url: "#",
    thumbnailUrl: "https://images.unsplash.com/photo-1595079677745-f8e4ecc64a61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["Marketing", "Digital", "Social Media"]
  },
  {
    id: "7",
    title: "Business Registration Checklist",
    category: "checklist",
    description: "A step-by-step checklist for registering a business in Kenya, including all required documents.",
    isPremium: false,
    url: "#",
    tags: ["Legal", "Registration", "Compliance"]
  },
  {
    id: "8",
    title: "Funding Readiness Checklist",
    category: "checklist",
    description: "Assess whether your startup is ready to approach investors or apply for funding.",
    isPremium: false,
    url: "#",
    tags: ["Funding", "Investors", "Preparation"]
  }
];

const ResourceCard = ({ resource }: { resource: Resource }) => {
  const categoryIcons = {
    guide: <BookOpen className="text-blue-500" size={18} />,
    template: <FileText className="text-green-500" size={18} />,
    video: <Calendar className="text-red-500" size={18} />,
    checklist: <CheckCircle2 className="text-purple-500" size={18} />,
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      {resource.thumbnailUrl && (
        <div className="h-40 overflow-hidden">
          <img 
            src={resource.thumbnailUrl} 
            alt={resource.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardContent className={`${resource.thumbnailUrl ? 'pt-4' : 'pt-6'} flex-1`}>
        <div className="flex items-center gap-2 mb-2">
          <div>
            {categoryIcons[resource.category]}
          </div>
          <span className="text-xs font-medium text-gray-500 capitalize">
            {resource.category}
          </span>
          {resource.isPremium && (
            <span className="ml-auto bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded">
              Premium
            </span>
          )}
        </div>
        
        <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {resource.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mt-auto">
          {resource.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 flex gap-2">
        {resource.isPremium ? (
          <Button className="flex-1 bg-kenya-green hover:bg-kenya-green/90">
            Upgrade for Access
          </Button>
        ) : (
          <>
            <Button variant="outline" className="flex-1 flex items-center gap-1">
              <Bookmark size={16} />
              <span>Save</span>
            </Button>
            <Button className="flex-1 bg-kenya-green hover:bg-kenya-green/90 flex items-center gap-1">
              {resource.category === 'template' || resource.category === 'checklist' ? (
                <>
                  <Download size={16} />
                  <span>Download</span>
                </>
              ) : (
                <>
                  <ExternalLink size={16} />
                  <span>View</span>
                </>
              )}
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Learning Toolkit</h1>
              <p className="text-gray-600">
                Essential resources to help you build and grow your business in Kenya.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                <Input
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full md:w-72"
                />
              </div>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all" className="px-4">All Resources</TabsTrigger>
              <TabsTrigger value="guides" className="px-4">Guides</TabsTrigger>
              <TabsTrigger value="templates" className="px-4">Templates</TabsTrigger>
              <TabsTrigger value="checklists" className="px-4">Checklists</TabsTrigger>
              <TabsTrigger value="videos" className="px-4">Videos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Search size={24} className="text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-1">No resources found</h3>
                    <p className="text-gray-500 mb-4">Try adjusting your search terms</p>
                    <Button variant="outline" onClick={() => setSearchTerm("")}>
                      Clear Search
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="guides" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources
                  .filter(resource => resource.category === 'guide')
                  .map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="templates" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources
                  .filter(resource => resource.category === 'template')
                  .map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="checklists" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources
                  .filter(resource => resource.category === 'checklist')
                  .map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources
                  .filter(resource => resource.category === 'video')
                  .map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I register a business in Kenya?</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none">
                    <p>To register a business in Kenya, you generally need to follow these steps:</p>
                    <ol>
                      <li>Choose a business structure (sole proprietorship, partnership, or limited company)</li>
                      <li>Register your business name with the Registrar of Companies</li>
                      <li>Obtain a KRA PIN certificate for tax purposes</li>
                      <li>Apply for necessary permits and licenses based on your business type</li>
                      <li>Register for VAT if your business qualifies (over KSh 5 million annual turnover)</li>
                    </ol>
                    <p>For more detailed guidance, download our Business Registration Guide.</p>
                    <div className="flex justify-between items-center mt-2">
                      <Button variant="outline" className="flex items-center gap-1" onClick={() => {
                        navigator.clipboard.writeText("Steps to register a business in Kenya:\n1. Choose business structure\n2. Register business name\n3. Obtain KRA PIN\n4. Apply for permits\n5. Register for VAT if qualified");
                        toast({
                          title: "Copied to clipboard!",
                          description: "You can now paste this information anywhere you need.",
                        });
                      }}>
                        <Copy size={14} />
                        <span>Copy</span>
                      </Button>
                      <Button className="bg-kenya-green hover:bg-kenya-green/90">
                        Download Guide
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What taxes do I need to pay as a business owner?</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none">
                    <p>As a business owner in Kenya, you may be required to pay several taxes depending on your business structure and size:</p>
                    <ul>
                      <li><strong>Income Tax</strong> - For companies, the corporate tax rate is 30% for resident companies and 37.5% for non-resident companies. For sole proprietors, progressive tax rates apply based on income brackets.</li>
                      <li><strong>Value Added Tax (VAT)</strong> - If your annual turnover exceeds KSh 5 million, you must register for and charge VAT at 16%.</li>
                      <li><strong>Pay As You Earn (PAYE)</strong> - If you have employees, you must deduct and remit PAYE from their salaries.</li>
                      <li><strong>Withholding Tax</strong> - Applies to certain payments like dividends, interest, and professional fees.</li>
                    </ul>
                    <p>We recommend consulting with a certified accountant to ensure full tax compliance.</p>
                    <Button className="mt-2 bg-kenya-green hover:bg-kenya-green/90">
                      Download Tax Guide
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I access funding for my business?</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none">
                    <p>There are several funding options available for entrepreneurs in Kenya:</p>
                    <ul>
                      <li><strong>Government Funds</strong> - Youth Enterprise Development Fund, Women Enterprise Fund, etc.</li>
                      <li><strong>Bank Loans</strong> - KCB, Equity Bank, and other financial institutions offer business loans</li>
                      <li><strong>Venture Capital</strong> - Firms like Novastar Ventures, DOB Equity, and Savannah Fund</li>
                      <li><strong>Angel Investors</strong> - Kenya Angel Investors Network (KAIN)</li>
                      <li><strong>Incubators & Accelerators</strong> - Nailab, iHub, GrowthAfrica</li>
                      <li><strong>Grants</strong> - Tony Elumelu Foundation, Anzisha Prize</li>
                    </ul>
                    <p>Visit our Opportunities page to discover current funding opportunities available to you.</p>
                    <Button className="mt-2 bg-kenya-green hover:bg-kenya-green/90">
                      View Funding Opportunities
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What licenses do I need to operate a business?</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none">
                    <p>The licenses required to operate a business in Kenya depend on your business type and location. Common licenses include:</p>
                    <ul>
                      <li><strong>Business Permit</strong> - From your county government</li>
                      <li><strong>Fire Safety Certificate</strong> - For physical premises</li>
                      <li><strong>Health Certificate</strong> - For food-related businesses</li>
                      <li><strong>NEMA License</strong> - For businesses that may impact the environment</li>
                      <li><strong>Industry-specific licenses</strong> - E.g., Tourism license, Liquor license, etc.</li>
                    </ul>
                    <p>It's important to research the specific requirements for your business type and location.</p>
                    <Button className="mt-2 bg-kenya-green hover:bg-kenya-green/90">
                      Download Licensing Guide
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How do I create a business plan?</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none">
                    <p>A good business plan for Kenyan entrepreneurs should include:</p>
                    <ol>
                      <li><strong>Executive Summary</strong> - Brief overview of your business</li>
                      <li><strong>Business Description</strong> - What your business does, mission, vision</li>
                      <li><strong>Market Analysis</strong> - Industry trends, target market, competition</li>
                      <li><strong>Products/Services</strong> - What you offer and what makes it unique</li>
                      <li><strong>Marketing Strategy</strong> - How you'll reach customers</li>
                      <li><strong>Operational Plan</strong> - Day-to-day operations, facilities, equipment</li>
                      <li><strong>Management Team</strong> - Key personnel and their qualifications</li>
                      <li><strong>Financial Projections</strong> - Income statement, cash flow, balance sheet forecasts</li>
                      <li><strong>Funding Requirements</strong> - Capital needs and how funds will be used</li>
                    </ol>
                    <p>We offer a customizable template tailored for Kenyan entrepreneurs.</p>
                    <Button className="mt-2 bg-kenya-green hover:bg-kenya-green/90">
                      Download Business Plan Template
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
