"use client";

import { Column, Flex, Heading, SmartImage, SmartLink, Tag, Text } from "@/once-ui/components";
import styles from "./Posts.module.scss";
import { formatDate } from "@/app/utils/formatDate";

interface PostProps {
  post: any;
  thumbnail: boolean;
}

// Array of dummy images for posts that don't have an image
const dummyImages = [
  "/images/projects/project-01/cover-01.jpg",
  "/images/projects/project-01/cover-02.jpg",
  "/images/projects/project-01/cover-03.jpg",
  "/images/projects/project-01/cover-04.jpg",
  "/images/projects/project-01/image-01.jpg",
  "/images/projects/project-01/image-02.jpg",
];

export default function Post({ post, thumbnail }: PostProps) {
  // Get a consistent dummy image based on the post slug
  const getDummyImage = () => {
    const index = post.slug.length % dummyImages.length;
    return dummyImages[index];
  };

  // Use post image if available, otherwise use a dummy image
  const imageUrl = post.metadata.image || getDummyImage();

  return (
    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href={`/blog/${post.slug}`}
    >
      <Column 
        position="relative"
        fillWidth
        gap="16"
        border="neutral-alpha-weak"
        radius="m"
        overflow="hidden"
      >
        {thumbnail && (
          <SmartImage
            priority
            fillWidth
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 33vw"
            cursor="interactive"
            src={imageUrl}
            alt={"Tech article thumbnail: " + post.metadata.title}
            aspectRatio="16 / 9"
          />
        )}
        <Column position="relative" fillWidth gap="8" paddingX="24" paddingBottom="24">
          {post.metadata.tag && (
            <Tag label={post.metadata.tag} variant="neutral" />
          )}
          <Heading as="h2" variant="heading-strong-m" wrap="balance">
            {post.metadata.title}
          </Heading>
          <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="8">
            {post.metadata.summary}
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt, false)}
          </Text>
        </Column>
      </Column>
    </SmartLink>
  );
}
