"use client";

import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectData {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    images: string[];
    team?: { avatar: string }[];
    link?: string;
  };
  content: string;
}

interface ProjectsClientProps {
  projects: ProjectData[];
  range?: [number, number?];
}

// Mock data for client-side rendering when server data isn't available
const mockProjects: ProjectData[] = [
  {
    slug: "mock-project-1",
    metadata: {
      title: "Senior Engineer Level Development",
      publishedAt: new Date().toISOString(),
      summary: "We leverage rockstar engineers and AI to transform business operations and drive growth.",
      images: ["/images/perdiemfood.png"],
      team: [{ avatar: "/images/sofrix-black-3.jpg" }],
      link: "#"
    },
    content: "Our AI solutions help businesses automate processes, gain insights from data, and make better decisions."
  },
  {
    slug: "mock-project-2",
    metadata: {
      title: "Senior Level Development",
      publishedAt: new Date().toISOString(),
      summary: "Building scalable, secure, and reliable software solutions for enterprise needs.",
      images: ["/images/projects/project-01/cover-02.jpg"],
      team: [{ avatar: "/images/sofrix-black-3.jpg" }],
      link: "#"
    },
    content: "We create custom enterprise software that streamlines operations and enhances productivity."
  }
];

export function ProjectsClient({ projects = mockProjects, range }: ProjectsClientProps) {
  const projectsToUse = projects.length > 0 ? projects : mockProjects;
  
  const sortedProjects = projectsToUse.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={(post.metadata.team || []).map(member => ({ src: member.avatar }))}
          link={post.metadata.link || ''}
        />
      ))}
    </Column>
  );
} 