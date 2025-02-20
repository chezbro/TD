import React from "react";
import Image from "next/image";

interface Developer {
  name: string;
  avatar: string;
  description: string;
  rate: number;
  skills: string[];
  availability: string;
  timezone: string;
}

interface DeveloperGridProps {
  children: Developer[];
}

export default function DeveloperGrid({ children }: DeveloperGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children.map((developer, index) => (
        <div key={index} className="rounded-lg border p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image src={developer.avatar} alt={developer.name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{developer.name}</h3>
              <p className="text-sm text-gray-600">{developer.timezone}</p>
            </div>
          </div>

          <p className="mb-4 text-gray-700">{developer.description}</p>

          <div className="mb-4">
            <div className="flex items-center gap-2 text-sm">
              <span
                className={`rounded px-2 py-1 ${
                  developer.availability.toLowerCase().includes("available")
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {developer.availability}
              </span>
              <span className="font-medium">${developer.rate}/hr</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {developer.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
