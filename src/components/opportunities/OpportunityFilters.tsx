
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, Search } from "lucide-react";

interface OpportunityFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedType: string | undefined;
  setSelectedType: (value: string | undefined) => void;
  selectedLocation: string | undefined;
  setSelectedLocation: (value: string | undefined) => void;
  selectedIndustry: string | undefined;
  setSelectedIndustry: (value: string | undefined) => void;
  types: string[];
  locations: string[];
  industries: string[];
  resetFilters: () => void;
  filtersDialogRef: React.RefObject<HTMLDialogElement>;
}

const OpportunityFilters = ({
  searchTerm,
  setSearchTerm,
  selectedType,
  selectedLocation,
  selectedIndustry,
  setSelectedType,
  setSelectedLocation,
  setSelectedIndustry,
  types,
  locations,
  industries,
  resetFilters,
  filtersDialogRef,
}: OpportunityFiltersProps) => {
  return (
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
                  <SelectItem value="all">All Types</SelectItem>
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
                  <SelectItem value="all">All Locations</SelectItem>
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
                  <SelectItem value="all">All Industries</SelectItem>
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
    </div>
  );
};

export default OpportunityFilters;
