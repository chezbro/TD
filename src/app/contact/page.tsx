import { Metadata } from "next";
import {
  Card,
  Column,
  Flex,
  Grid,
  Heading,
  Icon,
  Line,
  Text,
  Button,
  Textarea,
  Input,
  RevealFx,
} from "@/once-ui/components";

import { contact, person } from "@/app/resources/content";
import "./contact.css";

export function generateMetadata(): Metadata {
  return {
    title: contact.title || "Contact Us",
    description: contact.description,
    openGraph: {
      title: contact.title || "Contact Us",
      description: contact.description,
    }
  };
}

export default function ContactPage() {
  return (
    <div className="contact-container">
      {/* Hero Section with Angled Design */}
      <div className="contact-hero">
        <div className="hero-content">
          <RevealFx>
            <Heading variant="display-strong-xl" className="hero-title">{contact.title || "Get in Touch"}</Heading>
          </RevealFx>
          {contact.intro.display && (
            <RevealFx delay={0.1}>
              <Text variant="body-default-l" className="hero-description">{contact.intro.description}</Text>
            </RevealFx>
          )}
        </div>
        <div className="hero-shape"></div>
      </div>

      {/* Main Content */}
      <div className="contact-main">
        {/* Left Side - Contact Form */}
        <div className="contact-form-container">
          <RevealFx delay={0.1}>
            <Card padding="xl" shadow="l" border="neutral-weak" radius="l" className="contact-card">
              <Column gap="l">
                <Heading variant="display-strong-m" className="section-title" color="neutral-strong">Send Us a Message</Heading>
                
                <div className="form-grid">
                  <div className="form-group">
                    <Input
                      id="name"
                      label="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      id="email"
                      label="Email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                
                <Input
                  id="subject"
                  label="Subject"
                  required
                />
                
                <Textarea
                  id="message"
                  label="Message"
                  rows={6}
                  required
                />
                
                <Button variant="primary" size="l" className="submit-button">
                  <Flex gap="s" vertical="center">
                    <Icon name="send" size="s" onBackground="brand-strong" />
                    <Text>Send Message</Text>
                  </Flex>
                </Button>
              </Column>
            </Card>
          </RevealFx>
        </div>
        
        {/* Right Side - Contact Info & Map */}
        <div className="contact-info-container">
          <RevealFx delay={0.2}>
            {/* Contact Quick Info */}
            <div className="contact-info-grid">
              <div className="info-card">
                <Flex gap="m" align="start">
                  <Icon name="mail" size="l" color="brand-strong" />
                  <div className="info-content">
                    <Text variant="heading-strong-s" color="neutral-strong">Email Us</Text>
                    <a href={`mailto:${contact.contactInfo.email}`} className="contact-link">
                      {contact.contactInfo.email}
                    </a>
                  </div>
                </Flex>
              </div>
              
              <div className="info-card">
                <Flex gap="m" align="start">
                  <Icon name="phone" size="l" color="brand-strong" />
                  <div className="info-content">
                    <Text variant="heading-strong-s" color="neutral-strong">Call Us</Text>
                    <a href={`tel:${contact.contactInfo.phone}`} className="contact-link">
                      {contact.contactInfo.phone}
                    </a>
                  </div>
                </Flex>
              </div>
              
              <div className="info-card">
                <Flex gap="m" align="start">
                  <Icon name="map-pin" size="l" color="brand-strong" />
                  <div className="info-content">
                    <Text variant="heading-strong-s" color="neutral-strong">Visit Us</Text>
                    <Text variant="body-default-m" color="neutral-strong">{contact.contactInfo.address}</Text>
                  </div>
                </Flex>
              </div>
              
              <div className="info-card">
                <Flex gap="m" align="start">
                  <Icon name="clock" size="l" color="brand-strong" />
                  <div className="info-content">
                    <Text variant="heading-strong-s" color="neutral-strong">Business Hours</Text>
                    <Text variant="body-default-m" color="neutral-strong">{contact.contactInfo.hours}</Text>
                  </div>
                </Flex>
              </div>
            </div>
            
            {/* Map Placeholder - Removed */}
            
            {/* Social Links */}
            <div className="social-section">
              <Text variant="heading-strong-s" color="neutral-strong" align="center">Connect With Us</Text>
              <div className="social-links">
                <a href="#" className="social-link-circle">
                  <Icon name="linkedin" size="m" color="brand-strong" />
                </a>
                <a href="#" className="social-link-circle">
                  <Icon name="github" size="m" color="brand-strong" />
                </a>
                <a href="#" className="social-link-circle">
                  <Icon name="x" size="m" color="brand-strong" />
                </a>
              </div>
            </div>
          </RevealFx>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="faq-section">
        <RevealFx delay={0.3}>
          <Heading variant="display-strong-l" className="faq-title">Frequently Asked Questions</Heading>
          <div className="faq-grid">
            <div className="faq-item">
              <Heading variant="heading-strong-m">How quickly do you respond to inquiries?</Heading>
              <Text variant="body-default-m">We typically respond to all inquiries within 24 business hours. For urgent matters, please call us directly.</Text>
            </div>
            <div className="faq-item">
              <Heading variant="heading-strong-m">Do you offer remote services?</Heading>
              <Text variant="body-default-m">Yes, we provide remote software development and consulting services to clients worldwide, with teams that can work in your time zone.</Text>
            </div>
            <div className="faq-item">
              <Heading variant="heading-strong-m">What industries do you specialize in?</Heading>
              <Text variant="body-default-m">We have expertise across multiple industries including fintech, healthcare, e-commerce, and enterprise solutions.</Text>
            </div>
            <div className="faq-item">
              <Heading variant="heading-strong-m">How do you handle project pricing?</Heading>
              <Text variant="body-default-m">We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements based on your needs.</Text>
            </div>
          </div>
        </RevealFx>
      </div>
    </div>
  );
} 