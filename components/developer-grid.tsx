import Image from "next/image";
import { Clock, Mail } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

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

export function DeveloperGrid({ children }: DeveloperGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children.map((developer, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image src={developer.avatar} alt={developer.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{developer.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  {developer.timezone}
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1">
            <p className="mb-4 text-muted-foreground">{developer.description}</p>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <Badge variant={developer.availability.toLowerCase().includes("available") ? "default" : "secondary"}>
                  {developer.availability}
                </Badge>
                <span className="font-medium">${developer.rate}/hr</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {developer.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter>
            <Button asChild className="w-full">
              <a href={`mailto:john@offshorecoding.com?subject=Inquiry about ${developer.name}`}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Developer
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
