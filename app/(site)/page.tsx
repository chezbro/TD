import Image from "next/image";
import Link from "next/link";
import { allPages, allPosts } from "contentlayer/generated";
import { ArrowRight } from "lucide-react";

import { developers } from "@/lib/developers-data";
import siteMetadata, { defaultAuthor } from "@/lib/metadata";
import { sortByDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DeveloperGrid } from "@/components/developer-grid";
import { HeroImage } from "@/components/hero-image";
import { HeroMinimal } from "@/components/hero-minimal";
import { HeroSimple } from "@/components/hero-simple";
import { HeroVideo } from "@/components/hero-video";
import { Sidebar } from "@/components/home-sidebar";
import { Mdx } from "@/components/mdx";
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import PostPreview from "@/components/post-preview";

async function getAboutPage() {
  const aboutPage = allPages.find((page) => page.slug === "about");

  if (!aboutPage) {
    null;
  }

  return aboutPage;
}

export default async function Home() {
  const aboutPage = await getAboutPage();
  const posts = allPosts
    .filter((post) => post.status === "published")
    .sort(sortByDate)
    .slice(0, siteMetadata.postsOnHomePage);

  return (
    <div className="pb-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-20 dark:from-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl/none">
                  Offshore Development Insights & Strategies
                </h1>
                <p className="text-lg text-slate-300 sm:text-xl">
                  Learn how to build and scale successful development teams across borders. Join 1,000+ companies
                  getting it right.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  <Link href="/developers">View Available Developers</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/posts">Read Latest Insights</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>
              <div className="absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl"></div>
              <div className="relative aspect-square rounded-2xl border border-slate-700/50 bg-slate-800/50 p-4 backdrop-blur-sm">
                <Image
                  src="/TD1.jpg"
                  alt={defaultAuthor.name}
                  width={500}
                  height={500}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="container mt-20 max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-3xl font-bold">Latest Insights</h2>
              <Link
                href="/posts"
                className="flex items-center text-sm text-muted-foreground hover:text-accent-foreground"
              >
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-flow-row gap-6">
              {posts.map((post) => (
                <PostPreview key={post._id} post={post} />
              ))}
            </div>
          </div>
          <aside className="w-full">
            <Sidebar />
          </aside>
        </div>
      </section>

      {/* Newsletter Section */}
      {siteMetadata.newsletterProvider && (
        <section className="container my-20">
          <div className="rounded-2xl bg-gradient-to-b from-slate-50 to-white p-8 shadow-lg dark:from-slate-900 dark:to-slate-800 sm:p-12">
            <NewsletterSubscribe
              title="Get offshore development insights in your inbox"
              description="I share strategies for building and managing successful offshore development teams. Join over 1,000 companies learning how to scale with overseas talent. Unsubscribe whenever."
              buttonText="Send me the insights"
            />
          </div>
        </section>
      )}

      {/* About Section */}
      {aboutPage && (
        <section className="container mt-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="col-span-1 space-y-4">
              <div className="overflow-hidden rounded-xl border bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <Image
                  src="/eric-square.jpg"
                  alt={defaultAuthor.name}
                  width={400}
                  height={498}
                  className="h-auto w-full rounded-lg object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold">{defaultAuthor.name}</h3>
                <p className="text-muted-foreground">Offshore Development Expert</p>
                <p className="text-muted-foreground">Global Dev Solutions</p>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <article className="prose mx-auto max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-bold">
                <Mdx code={aboutPage.body.code} />
                <Link
                  href="/now"
                  className="mt-6 inline-flex items-center text-sm text-accent-foreground hover:text-muted-foreground"
                >
                  See what I&apos;m up to now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Developers Section */}
      <section className="container mt-20 max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-heading text-3xl font-bold">Pre-Vetted Developers</h2>
          <Button asChild>
            <Link href="/developers" className="inline-flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="rounded-2xl border bg-gradient-to-b from-slate-50 to-white p-8 shadow-lg dark:from-slate-900 dark:to-slate-800">
          <DeveloperGrid>{developers.slice(0, 3)}</DeveloperGrid>
        </div>
      </section>
    </div>
  );
}
