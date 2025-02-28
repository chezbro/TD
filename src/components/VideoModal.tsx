"use client";

import React, { useState, useEffect } from "react";
import { Dialog, Flex, Text, Button } from "@/once-ui/components";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  description?: React.ReactNode;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  description,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Simulate loading time for iframe
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const isYouTubeVideo = (url: string) => {
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return youtubeRegex.test(url);
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    );
    return match
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0&modestbranding=1&color=white`
      : "";
  };

  const isVideo = videoUrl?.endsWith(".mp4");
  const isYouTube = isYouTubeVideo(videoUrl);

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
    >
      <Flex
        fillWidth
        direction="column"
        gap="m"
      >
        <Flex
          fillWidth
          aspectRatio="16 / 9"
          overflow="hidden"
          radius="l"
          position="relative"
          background="neutral-strong"
        >
          {isLoading && (
            <Flex
              fill
              center
              background="neutral-strong"
              radius="l"
            >
              <Text variant="heading-strong-m" onBackground="neutral-weak">
                Loading video...
              </Text>
            </Flex>
          )}
          
          {!isLoading && isVideo && (
            <video
              src={videoUrl}
              controls
              autoPlay
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
          
          {!isLoading && isYouTube && (
            <iframe
              width="100%"
              height="100%"
              src={getYouTubeEmbedUrl(videoUrl)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                objectFit: "cover",
                borderRadius: "var(--radius-l)",
              }}
            />
          )}
        </Flex>
        
        <Flex horizontal="end" gap="m">
          <Button 
            variant="primary" 
            size="m" 
            onClick={onClose}
          >
            Close
          </Button>
        </Flex>
      </Flex>
    </Dialog>
  );
};

export { VideoModal }; 