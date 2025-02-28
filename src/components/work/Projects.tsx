"use server";

import { getPosts } from "@/app/utils/utils";
import { ProjectsClient } from "./ProjectsClient";

interface ProjectsProps {
  range?: [number, number?];
}

export async function Projects({ range }: ProjectsProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);
  
  return <ProjectsClient projects={allProjects} range={range} />;
}
