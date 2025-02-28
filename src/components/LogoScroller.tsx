"use client";

import React from "react";
import Image from "next/image";
import { Column, Heading, Text, Flex } from "@/once-ui/components";
import styled from "styled-components";

// Define the styled components for the logo scroller
const LogoScrollerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 2rem 0;
  max-width: 100%; /* Ensure it doesn't exceed parent width */
`;

const LogoScrollerTrack = styled.div`
  display: flex;
  animation: scroll 30s linear infinite;
  width: max-content;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const LogoItem = styled.div`
  flex: 0 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
`;

const TitleHighlight = styled.span`
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--color-primary);
    border-radius: 2px;
  }
`;

const SubtitleText = styled(Text)`
  max-width: 600px;
  margin: 2.5rem auto 0;
`;

// Define the props for the LogoScroller component
interface LogoScrollerProps {
  title?: string;
  description?: string;
}

// Array of dummy logos from logoipsum.com
const logos = [
  { src: "/images/logos/voxo.svg", alt: "Company Logo 1" },
  { src: "/images/logos/seer.svg", alt: "Company Logo 2" },
  { src: "/images/logos/perdiem.svg", alt: "Company Logo 3" },
  { src: "/images/logos/openphone.svg", alt: "Company Logo 4" },
  { src: "/images/logos/laligne.svg", alt: "Company Logo 5" },
  { src: "/images/logos/crowdbotics.svg", alt: "Company Logo 6" },
  { src: "/images/logos/expensify.svg", alt: "Company Logo 7" },
  { src: "/images/logos/litcheck.webp", alt: "Company Logo 8" },
];

export function LogoScroller({ title = "Companies we've worked with", description }: LogoScrollerProps) {
  return (
    <Column gap="l" paddingY="xl" fillWidth>
      <TitleContainer>
        <Heading as="h2" variant="display-strong-m" wrap="balance">
          <TitleHighlight>{title}</TitleHighlight>
        </Heading>
        {description && (
          <SubtitleText variant="body-default-l" wrap="balance" onBackground="neutral-weak">
            {description}
          </SubtitleText>
        )}
      </TitleContainer>

      <LogoScrollerContainer>
        <LogoScrollerTrack>
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <LogoItem key={`logo-${index}`}>
              <Image src={logo.src} alt={logo.alt} width={150} height={60} />
            </LogoItem>
          ))}
          {/* Duplicate set of logos for seamless scrolling */}
          {logos.map((logo, index) => (
            <LogoItem key={`logo-dup-${index}`}>
              <Image src={logo.src} alt={logo.alt} width={150} height={60} />
            </LogoItem>
          ))}
        </LogoScrollerTrack>
      </LogoScrollerContainer>
    </Column>
  );
} 