import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";

import { developers } from "@/lib/developers-data";
import { CallToAction } from "@/components/call-to-action";
import { DeveloperGrid } from "@/components/developer-grid";
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
        <DeveloperGrid>{developers}</DeveloperGrid>
        <Mdx code={page.body.code} />
      </article>
    </div>
  );
}
