"use client";

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"  ;
import { Button } from "@radix-ui/react-button";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFiltersProps {
  onFilter: (filters: {
    scholarshipType: string;
    amountRange: { min?: number; max?: number };
    deadlineRange?: DateRange;
    eligibility: string;
    studyField: string;
    location: string;
  }) => void;
}

export default function SearchFilters({ onFilter }: SearchFiltersProps) {
  const [scholarshipType, setScholarshipType] = useState('');
  const [amountRange, setAmountRange] = useState({ min: '', max: '' });
  const [deadlineRange, setDeadlineRange] = useState<DateRange | undefined>();
  const [eligibility, setEligibility] = useState('');
  const [studyField, setStudyField] = useState('');
  const [location, setLocation] = useState('');

  const handleApplyFilters = () => {
    const filters = {
      scholarshipType,
      amountRange: {
        min: amountRange.min ? parseFloat(amountRange.min) : undefined,
        max: amountRange.max ? parseFloat(amountRange.max) : undefined,
      },
      deadlineRange,
      eligibility,
      studyField,
      location,
    };
    onFilter(filters);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Scholarship Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Scholarship Type
          </label>
          <Select
            value={scholarshipType}
            onValueChange={setScholarshipType}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              <SelectItem value="merit">Merit-based</SelectItem>
              <SelectItem value="need">Need-based</SelectItem>
              <SelectItem value="community">Community Service</SelectItem>
              <SelectItem value="leadership">Leadership</SelectItem>
              <SelectItem value="athletic">Athletic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Amount Range */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Amount Range
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={amountRange.min}
              onChange={(e) => setAmountRange({ ...amountRange, min: e.target.value })}
              placeholder="Min"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={amountRange.max}
              onChange={(e) => setAmountRange({ ...amountRange, max: e.target.value })}
              placeholder="Max"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Deadline Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Deadline Range
          </label>
          <div className="relative">
            <div className="w-full">
            <DayPicker
              mode="range"
              selected={deadlineRange}
              onSelect={setDeadlineRange}
              className="w-full"
            />
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !deadlineRange && "text-muted-foreground"
              )}
              onClick={() => {
                // Toggle date picker visibility
              }}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {deadlineRange?.from ? format(deadlineRange.from, "PPP") : "Pick a date"}
            </Button>
          </div>
          </div>
        </div>

        {/* Eligibility */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Eligibility
          </label>
          <Select
            value={eligibility}
            onValueChange={setEligibility}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select eligibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Eligibility</SelectItem>
              <SelectItem value="highschool">High School Student</SelectItem>
              <SelectItem value="undergrad">Undergraduate</SelectItem>
              <SelectItem value="grad">Graduate</SelectItem>
              <SelectItem value="international">International Student</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Study Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Study Field
          </label>
          <Select
            value={studyField}
            onValueChange={setStudyField}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select field" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Fields</SelectItem>
              <SelectItem value="stem">STEM</SelectItem>
              <SelectItem value="arts">Arts & Humanities</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="health">Health Sciences</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleApplyFilters}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
