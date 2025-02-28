import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";

export async function generateMetadata() {
  const title = blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog() {
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Flex direction="column" gap="m" marginBottom="xl">
        <Heading variant="display-strong-s">
          {blog.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Stay updated with the latest software development insights, industry trends, and technical expertise from our engineering team.
        </Text>
      </Flex>
      
      {/* Featured Posts Section */}
      <Column fillWidth marginBottom="xl">
        <Heading variant="heading-strong-m" marginBottom="l">
          Featured Technical Articles
        </Heading>
        <Posts range={[1, 1]} columns="1" thumbnail />
      </Column>
      
      {/* Latest Posts Grid */}
      <Column fillWidth marginBottom="xl">
        <Heading variant="heading-strong-m" marginBottom="l">
          Latest Development Insights
        </Heading>
        <Posts range={[2]} columns="3" thumbnail />
      </Column>
      
      {/* Technology Insights Section */}
      <Column fillWidth marginBottom="xl">
        <Heading variant="heading-strong-m" marginBottom="l">
          Software Engineering Insights
        </Heading>
        <Posts range={[1, 3]} columns="2" thumbnail />
      </Column>
      
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
