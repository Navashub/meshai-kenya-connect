
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import OpportunityCard from "@/components/opportunities/OpportunityCard";
import OpportunityFilters from "@/components/opportunities/OpportunityFilters";
import EmptyState from "@/components/opportunities/EmptyState";
import { getTypeIcon, getTypeColor, formatDate } from "@/utils/opportunityHelpers";
import { opportunities } from "@/data/opportunities";

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

  const filtersDialogRef = useRef<HTMLDialogElement | null>(null);

  const filteredOpportunities = opportunities.filter(opportunity => {
    if (
      searchTerm &&
      !opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !opportunity.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    if (selectedType && selectedType !== "all" && opportunity.type !== selectedType) {
      return false;
    }

    if (selectedLocation && selectedLocation !== "all" && opportunity.location !== selectedLocation) {
      return false;
    }

    if (
      selectedIndustry && 
      selectedIndustry !== "all" &&
      !opportunity.industries.includes(selectedIndustry) &&
      !opportunity.industries.includes("All Industries")
    ) {
      return false;
    }

    return true;
  });

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

          <OpportunityFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedType={selectedType}
            selectedLocation={selectedLocation}
            selectedIndustry={selectedIndustry}
            setSelectedType={setSelectedType}
            setSelectedLocation={setSelectedLocation}
            setSelectedIndustry={setSelectedIndustry}
            types={types}
            locations={locations}
            industries={industries}
            resetFilters={resetFilters}
            filtersDialogRef={filtersDialogRef}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map((opportunity) => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  getTypeIcon={getTypeIcon}
                  getTypeColor={getTypeColor}
                  formatDate={formatDate}
                />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
