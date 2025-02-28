"use server";

import { getPosts } from "@/app/utils/utils";
import { PostsClient } from "./PostsClient";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  tag?: string;
}

export async function Posts({ range = [1, 3], columns = "1", thumbnail = false, tag }: PostsProps) {
  const allBlogs = getPosts(["src", "app", "blog", "posts"]);
  
  return (
    <PostsClient 
      posts={allBlogs} 
      range={range} 
      columns={columns} 
      thumbnail={thumbnail} 
      tag={tag} 
    />
  );
}
