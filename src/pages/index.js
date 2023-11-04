import React, { useEffect } from "react";
import pointerImg from "../../content/images/pointer.png";
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
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      cursor.style.left = clientX + "px";
      cursor.style.top = clientY + "px";
    },1000);
  }, []);

  return (
    <>
      <Seo title="Nikunj Rohit portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Hashnode']} /> */}
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="details" heading="Technologies I Have Experience With" />
        <ProjectsSection sectionId="features" heading="Projects" />
      </Page>
      <style>
        {`
          @media only screen and (max-width: 768px) {
            .style-module--Project--6d27a {
              overflow: auto;
              box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.5);
              justify-content: center;
              align-items: center;
              padding: 20px;
              margin: 10px;
              border-radius: 10px;
              background-color: #ffffff;
              animation-name: scroll;
              animation-duration: 10s;
              animation-iteration-count: infinite;
            }

            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(100%);
              }
            }
          }

          /* Cursor styles */
          .custom-cursor {
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 9999;
          }
        `}
      </style>
      <div className="custom-cursor">
        <img src={pointerImg} />
      </div>
    </>
  );
}
