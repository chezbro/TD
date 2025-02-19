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

export function DeveloperGrid({ children: developers }: DeveloperGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {developers.map((developer) => (
        <Card key={developer.name} className="flex flex-col">
          <CardHeader className="flex-row gap-4 space-y-0">
            <Image src={developer.avatar} alt={developer.name} width={60} height={60} className="rounded-full" />
            <div className="flex flex-col">
              <h3 className="font-semibold">{developer.name}</h3>
              <p className="text-sm text-muted-foreground">${developer.rate}/hour</p>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4 text-sm text-muted-foreground">{developer.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {developer.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {developer.timezone}
            </div>
            <div className="mt-2 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              {developer.availability}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <a href={`mailto:john@offshorecoding.com?subject=Interest in ${developer.name}`}>
                <Mail className="mr-2 h-4 w-4" /> Schedule Interview
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
