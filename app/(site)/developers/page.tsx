import Image from "next/image";
import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";
import { Clock, Mail } from "lucide-react";

import { developers } from "@/lib/developers-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Mdx } from "@/components/mdx";

export default async function DevelopersPage() {
  const page = allPages.find((page) => page.slug === "developers");

  if (!page) {
    notFound();
  }

  return (
    <div className="container pb-10">
      <article className="prose mx-auto max-w-5xl dark:prose-invert prose-headings:mb-3 prose-headings:mt-8 prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:prose-headings:no-underline">
        <h1 className="mt-0">{page.title}</h1>
        {page.description && <p className="m-0 text-xl">{page.description}</p>}

        {/* Developer Grid */}
        <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {developers.map((developer, index) => (
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
                    <Badge
                      variant={developer.availability.toLowerCase().includes("available") ? "default" : "secondary"}
                    >
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

        {/* Rest of the page content */}
        <Mdx code={page.body.code} />
      </article>
    </div>
  );
}
