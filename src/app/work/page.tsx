import { getPosts } from "@/app/utils/utils";
import { Column, Flex, Heading, Text, Card } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";
import { MobileStyles } from "@/components/MobileStyles";
import { LogoScroller } from "@/components/LogoScroller";
import Image from "next/image";

export async function generateMetadata() {
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/`,
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

export default function Work() {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Define images for expertise areas
  const expertiseImages = [
    "/images/projects/project-01/cover-01.jpg",
    "/images/projects/project-01/cover-02.jpg",
    "/images/projects/project-01/cover-03.jpg",
  ];

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/projects`,
            image: `${baseURL}/og?title=Design%20Projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
      
      {/* Introduction Section */}
      {work.intro && work.intro.display && (
        <Column fillWidth gap="l" marginBottom="40" paddingX="l">
          <Heading as="h1" variant="heading-strong-xl">
            {work.intro.title}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {work.intro.description}
          </Text>
        </Column>
      )}
      
      {/* Companies we've worked with section */}
      <Column fillWidth marginBottom="40">
        <Column maxWidth="m" horizontal="center">
          <LogoScroller 
            title="Companies We've Worked With" 
            description="We're proud to have partnered with these innovative companies to deliver exceptional software solutions."
          />
        </Column>
      </Column>
      
      {/* Expertise Areas */}
      {work.expertise && (
        <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
          <Heading as="h2" variant="heading-strong-xl">
            Our Areas of Expertise
          </Heading>
          <div className="expertise-grid">
            {work.expertise.map((area, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-image-container">
                  <Image 
                    src={expertiseImages[index] || "/images/projects/project-01/cover-01.jpg"} 
                    alt={area.title}
                    width={600}
                    height={400}
                    className="expertise-image"
                  />
                </div>
                <div className="expertise-content">
                  <Heading as="h3" variant="heading-strong-l">
                    {area.title}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak" className="expertise-description">
                    {area.description}
                  </Text>
                  {area.areas && (
                    <ul className="expertise-list">
                      {area.areas.map((item, idx) => (
                        <li key={idx} className="expertise-list-item">
                          <Text variant="body-default-s">{item}</Text>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Column>
      )}
      
      {/* Featured Projects Section */}
      <Column fillWidth gap="l" marginBottom="20" paddingX="l">
        <Heading as="h2" variant="heading-strong-xl">
          Featured Projects
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Explore our portfolio of successful software development projects that showcase our technical capabilities and expertise.
        </Text>
      </Column>
      
      <Projects />
      <MobileStyles />
    </Column>
  );
}
