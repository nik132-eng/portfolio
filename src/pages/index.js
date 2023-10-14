import React from "react";
import {
  AboutSection,
  ArticlesSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Nikunj Rohit portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Hashnode']} />
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="details" heading="Technologies I Have Experience With" />
        <ProjectsSection sectionId="features" heading="Projects" />
      </Page>
    </>
  );
}
