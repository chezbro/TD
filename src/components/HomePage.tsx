"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, Card, Grid } from "@/once-ui/components";
import Image from "next/image";
import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp, VideoModal } from "@/components";
import { MobileStyles } from "@/components/MobileStyles";
import Link from "next/link";
import { LogoScroller } from "@/components/LogoScroller";

// Dynamically import client components instead of server components
const ProjectsClient = dynamic(
  () => import("@/components/work/ProjectsClient").then(mod => ({ 
    default: React.memo(mod.ProjectsClient) 
  })), 
  { ssr: false }
);

const Posts = dynamic(
  () => import("@/components/blog/Posts").then(mod => ({ 
    default: React.memo(mod.Posts) 
  })), 
  { ssr: false }
);

export function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const [isShowcaseVideoModalOpen, setIsShowcaseVideoModalOpen] = React.useState(false);
  const [isBenefitsVideoModalOpen, setIsBenefitsVideoModalOpen] = React.useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const openShowcaseVideoModal = () => {
    setIsShowcaseVideoModalOpen(true);
  };

  const closeShowcaseVideoModal = () => {
    setIsShowcaseVideoModalOpen(false);
  };
  
  const openBenefitsVideoModal = () => {
    setIsBenefitsVideoModalOpen(true);
  };

  const closeBenefitsVideoModal = () => {
    setIsBenefitsVideoModalOpen(false);
  };

  // Use useMemo for props that don't change to prevent unnecessary re-renders
  const projectsRangeOne = useMemo(() => [1, 1] as [number, number], []);
  const projectsRangeTwo = useMemo(() => [2] as [number], []);
  const postsRange = useMemo(() => [1, 3] as [number, number], []);
  const postsColumns = useMemo(() => "3" as const, []);

  // Memoize the schema JSON to prevent re-renders
  const schemaJson = useMemo(() => {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: home.title,
      description: home.description,
      url: `https://${baseURL}`,
      image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
      publisher: {
        "@type": "Person",
        name: person.name,
        image: {
          "@type": "ImageObject",
          url: `${baseURL}${person.avatar}`,
        },
      },
    });
  }, []);

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: schemaJson
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              onClick={openVideoModal}
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                <Flex gap="8" vertical="center">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "0.25rem" }}
                  >
                    <path 
                      d="M8 5.14V19.14L19 12.14L8 5.14Z" 
                      fill="currentColor" 
                    />
                  </svg>
                  {about.title}
                </Flex>
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6} style={{ marginTop: "-2rem" }}>
        {routes["/work"] && <ProjectsClient range={projectsRangeOne} projects={[]} />}
      </RevealFx>

      {/* Companies we've worked with section */}
      <RevealFx translateY="16" delay={0.7}>
        <Column maxWidth="m" horizontal="center">
          <LogoScroller 
            title="Companies We've Worked With"             
            description="We're proud to have collaborated with these amazing organizations on innovative software solutions."
          />
        </Column>
      </RevealFx>

      {/* Features Section with Images */}
      {home.features?.display && (
        <RevealFx translateY="16" delay={0.8}>
          <Column gap="l" paddingY="m">
            <Column maxWidth="s" gap="m" paddingBottom="m">
              <Heading as="h2" variant="display-strong-m" wrap="balance">
                {home.features.title}
              </Heading>
              <Text variant="body-default-l" wrap="balance" onBackground="neutral-weak">
                {home.features.description}
              </Text>
            </Column>
            <div className="expertise-grid">
              {home.features.items.map((feature, index) => (
                <div key={`feature-${index}`} className="expertise-card">
                  {feature.image && (
                    <div className="expertise-image-container">
                      <Image
                        src={feature.image.src}
                        alt={feature.image.alt}
                        width={600}
                        height={400}
                        className="expertise-image"
                        quality={95}
                      />
                    </div>
                  )}
                  <div className="expertise-content">
                    <Heading as="h3" variant="heading-strong-l">
                      {feature.title}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak" className="expertise-description">
                      {feature.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </Column>
        </RevealFx>
      )}

      {routes["/blog"] && (
        <Flex fillWidth paddingX="l">
          <Posts range={postsRange} columns={postsColumns} />
        </Flex>
      )}

      {/* Benefits Section with Video and Images */}
      {home.benefits?.display && (
        <RevealFx translateY="16" delay={0.9}>
          <Column gap="l" paddingY="m">
            <Column maxWidth="s" gap="m" paddingBottom="m">
              <Heading as="h2" variant="display-strong-m" wrap="balance">
                {home.benefits.title}
              </Heading>
              <Text variant="body-default-l" wrap="balance" onBackground="neutral-weak">
                {home.benefits.description}
              </Text>
            </Column>
            
            {/* Video thumbnail */}
            {home.benefits.video && (
              <RevealFx translateY="8" delay={0.2}>
                <Flex 
                  style={{ 
                    position: "relative", 
                    cursor: "pointer",
                    borderRadius: "12px",
                    overflow: "hidden",
                    marginBottom: "2rem"
                  }}
                  onClick={openBenefitsVideoModal}
                >
                  <Image
                    src={home.benefits.video.thumbnail}
                    alt={home.benefits.video.title}
                    width={16}
                    height={9}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Flex 
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0,0,0,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Flex 
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M8 5.14V19.14L19 12.14L8 5.14Z" 
                          fill="currentColor" 
                        />
                      </svg>
                    </Flex>
                  </Flex>
                </Flex>
              </RevealFx>
            )}
            
            <div className="expertise-grid">
              {home.benefits.items.map((benefit, index) => (
                <div key={`benefit-${index}`} className="expertise-card">
                  {benefit.image && (
                    <div className="expertise-image-container">
                      <Image
                        src={benefit.image.src}
                        alt={benefit.image.alt}
                        width={600}
                        height={400}
                        className="expertise-image"
                        quality={95}
                      />
                    </div>
                  )}
                  <div className="expertise-content">
                    <Heading as="h3" variant="heading-strong-l">
                      {benefit.title}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak" className="expertise-description">
                      {benefit.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </Column>
        </RevealFx>
      )}

      {routes["/work"] && <ProjectsClient range={projectsRangeTwo} projects={[]} />}

      {/* Testimonials Section with Background Image and Avatars */}
      {home.testimonials?.display && (
        <RevealFx translateY="16" delay={0.9}>
          <Column gap="l" paddingY="m">
            <Column maxWidth="s" gap="m" paddingBottom="m">
              <Heading as="h2" variant="display-strong-m" wrap="balance">
                {home.testimonials.title}
              </Heading>
              <Text variant="body-default-l" wrap="balance" onBackground="neutral-weak">
                Our clients share their experiences working with our team
              </Text>
            </Column>
            
            <div className="expertise-grid">
              {home.testimonials.items.map((testimonial, index) => (
                <div key={`testimonial-${index}`} className="expertise-card testimonial-card">
                  <div className="expertise-content">
                    <Text variant="body-default-l" style={{ fontStyle: "italic", marginBottom: "1.5rem", color: "#000" }}>
                      "{testimonial.quote}"
                    </Text>
                    <Flex gap="m" vertical="center">
                      {testimonial.avatar && (
                        <Avatar
                          src={testimonial.avatar}
                          size="m"
                        />
                      )}
                      <Column gap="xs">
                        <Text variant="body-strong-m">{testimonial.author}</Text>
                        <Text variant="body-default-s" onBackground="neutral-weak">{testimonial.role}</Text>
                      </Column>
                    </Flex>
                  </div>
                </div>
              ))}
            </div>
          </Column>
        </RevealFx>
      )}

      {/* Project Showcase Section with Gallery and Video */}
      {home.showcase?.display && (
        <RevealFx translateY="16" delay={1.0}>
          <Column gap="l" paddingY="m">
            <Column maxWidth="s" gap="m" paddingBottom="m">
              <Heading as="h2" variant="display-strong-m" wrap="balance">
                {home.showcase.title}
              </Heading>
              <Text variant="body-default-l" wrap="balance" onBackground="neutral-weak">
                {home.showcase.description}
              </Text>
            </Column>
            
            <div className="showcase-grid">
              {home.showcase.gallery.map((item, index) => (
                <div key={`gallery-${index}`} className="expertise-card">
                  <div className="expertise-image-container">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="expertise-image"
                      quality={95}
                    />
                  </div>
                  <div className="expertise-content">
                    <Heading as="h3" variant="heading-strong-l">
                      {item.title}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak" className="expertise-description">
                      {item.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Video thumbnail */}
            {home.showcase.video && (
              <RevealFx translateY="8" delay={0.2} paddingTop="l">
                <Flex 
                  style={{ 
                    position: "relative", 
                    cursor: "pointer",
                    borderRadius: "12px",
                    overflow: "hidden"
                  }}
                  onClick={openShowcaseVideoModal}
                >
                  <Image
                    src={home.showcase.video.thumbnail}
                    alt={home.showcase.video.title}
                    width={16}
                    height={9}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Flex 
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0,0,0,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Flex 
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M8 5.14V19.14L19 12.14L8 5.14Z" 
                          fill="currentColor" 
                        />
                      </svg>
                    </Flex>
                  </Flex>
                </Flex>
              </RevealFx>
            )}
          </Column>
        </RevealFx>
      )}

      {/* Call to Action Section with Background Image */}
      {home.callToAction?.display && (
        <RevealFx translateY="16" delay={1.2}>
          <Flex 
            style={{ 
              backgroundImage: home.callToAction.backgroundImage ? `url(${home.callToAction.backgroundImage.src})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '12px',
              padding: '3rem',
              position: 'relative'
            }}
          >
            {home.callToAction.backgroundImage && (
              <Flex 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  borderRadius: '12px'
                }}
              />
            )}
            <Column gap="l" paddingY="m" horizontal="center" maxWidth="s" style={{ position: 'relative', zIndex: 1 }}>
              <Column gap="m" horizontal="center">
                <Heading as="h2" variant="display-strong-m" wrap="balance" style={{ textAlign: "center", color: "#fff" }}>
                  {home.callToAction.title}
                </Heading>
                <Text variant="body-default-l" wrap="balance" style={{ textAlign: "center", color: "#fff" }}>
                  {home.callToAction.description}
                </Text>
              </Column>
              <Link href={home.callToAction.buttonLink}>
                <Button variant="primary" size="l" arrowIcon>
                  {home.callToAction.buttonText}
                </Button>
              </Link>
            </Column>
          </Flex>
        </RevealFx>
      )}

      {newsletter.display && <Mailchimp newsletter={newsletter} />}
      
      {/* Video Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoUrl={about.video.url}
        title={about.video.title}
        description={about.video.description}
      />
      
      <VideoModal
        isOpen={isShowcaseVideoModalOpen}
        onClose={closeShowcaseVideoModal}
        videoUrl={home.showcase?.video?.url || ""}
        title={home.showcase?.video?.title || ""}
        description={home.showcase?.video?.description || ""}
      />
      
      <VideoModal
        isOpen={isBenefitsVideoModalOpen}
        onClose={closeBenefitsVideoModal}
        videoUrl={home.benefits?.video?.url || ""}
        title={home.benefits?.video?.title || ""}
        description={home.benefits?.video?.description || ""}
      />
      <MobileStyles />
    </Column>
  );
} 