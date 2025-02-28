"use client";

import { Grid } from "@/once-ui/components";
import Post from "./Post";

interface PostData {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    tag?: string;
  };
  content: string;
}

interface PostsClientProps {
  posts: PostData[];
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  tag?: string;
}

// Mock data for client-side rendering when server data isn't available
const mockPosts: PostData[] = [
  {
    slug: "mock-post-1",
    metadata: {
      title: "The Future of AI in Software Development",
      publishedAt: new Date().toISOString(),
      summary: "Exploring how artificial intelligence is transforming the way we build software.",
      image: "/images/projects/project-01/cover-03.jpg",
      tag: "AI"
    },
    content: "Artificial intelligence is revolutionizing software development through automated testing, code generation, and more."
  },
  {
    slug: "mock-post-2",
    metadata: {
      title: "Best Practices for Remote Development Teams",
      publishedAt: new Date().toISOString(),
      summary: "Tips and strategies for managing distributed software development teams effectively.",
      image: "/images/projects/project-01/cover-04.jpg",
      tag: "Management"
    },
    content: "Remote work requires clear communication, well-defined processes, and the right collaboration tools."
  }
];

export function PostsClient({ posts = mockPosts, range, columns = "1", thumbnail = false, tag }: PostsClientProps) {
  const postsToUse = posts.length > 0 ? posts : mockPosts;
  
  // Sort blogs by publish date (newest first)
  const sortedBlogs = postsToUse.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // Filter by tag if provided
  const filteredBlogs = tag 
    ? sortedBlogs.filter(blog => blog.metadata.tag === tag)
    : sortedBlogs;

  // Determine which blogs to display based on range
  const displayedBlogs = range
    ? filteredBlogs.slice(range[0] - 1, range[1])
    : filteredBlogs;

  // Set appropriate gap based on columns
  const gap = columns === "1" ? "xl" : "l";

  return (
    <Grid columns={columns} gap={gap} fillWidth>
      {displayedBlogs.map((post) => (
        <Post
          key={post.slug}
          post={{
            slug: post.slug,
            metadata: post.metadata
          }}
          thumbnail={thumbnail}
        />
      ))}
    </Grid>
  );
} 