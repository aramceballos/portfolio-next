import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { ChevronUp } from "@styled-icons/evil";
import { Fade } from "react-reveal";
import { Github, Linkedin } from "@styled-icons/boxicons-logos";

import AppLayout from "@components/AppLayout";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    "https://portfolio-rest-api.vercel.app/api/projects"
  );
  const { data }: TAPIProjectsResponse = await response.json();

  return {
    props: {
      projects: data,
    },
  };
};

const Home = ({ projects }: { projects: TProject[] }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.screen.width < 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <>
      <AppLayout>
        <div id='top'></div>
        <div className='hero'>
          <div className='container'>
            <Fade
              bottom={isMobile}
              left={!isMobile}
              duration={600}
              distance='20px'
            >
              <h1 className='hero-title'>
                Hi, my name is{" "}
                <span className='text-color-main'>Aram Ceballos</span> <br />{" "}
                I'm a FullStack Developer
              </h1>
            </Fade>
            <Fade
              bottom={isMobile}
              left={!isMobile}
              delay={600}
              duration={600}
              distance='20px'
            >
              <p className='know-more'>
                <a className='know-more-button' href='#about'>
                  Know more
                </a>
              </p>
            </Fade>
          </div>
        </div>
        <section id='about'>
          <div className='container'>
            <Fade duration={600} delay={200}>
              <h2 className='section-title'>About me</h2>
            </Fade>
            <Fade
              bottom={isMobile}
              left={!isMobile}
              duration={600}
              delay={600}
              distance='20px'
            >
              <div className='row about-wrapper'>
                <div className='column'>
                  <div className='about-wrapper-info'>
                    <p className='about-wrapper-info-text'>
                      Hi, my name is Aram and I'm a Web Developer who is
                      passionate about Web Technologies and Blockchain. I enjoy
                      solving problems, the process of taking apart the problem
                      in easier chunk of problems is something that I really
                      like.
                    </p>
                    <p className='about-wrapper-info-text'>
                      When I'm not doing tech things a also really like to
                      listen to music and finding new songs as well as walking
                      long distances.
                    </p>
                    <span className='button-container'>
                      <a
                        href='Resume.pdf'
                        download='Resume'
                        className='view-resume-button'
                      >
                        Download Resume
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </section>
        <section id='projects'>
          <div className='container'>
            <div className='project-wrapper'>
              <Fade duration={600} delay={200}>
                <h2 className='section-title'>Projects</h2>
              </Fade>
              {projects &&
                projects.map((project) => (
                  <div className='row' key={project._id}>
                    <Fade
                      bottom={isMobile}
                      left={!isMobile}
                      duration={600}
                      delay={600}
                      distance='20px'
                    >
                      <div className='project-column'>
                        <div className='project-wrapper-text'>
                          <h3 className='project-wrapper-text-title'>
                            {project.title}
                          </h3>
                          <div>
                            <p className='project-description'>
                              {project.description}
                            </p>
                          </div>
                          {project.url && (
                            <a
                              rel='noreferrer'
                              target='_blank'
                              href={project.url}
                              className='view-demo-button'
                            >
                              View Demo
                            </a>
                          )}
                          <a
                            rel='noreferrer'
                            target='_blank'
                            href={project.repository}
                            className='view-code-button'
                          >
                            Source Code
                          </a>
                        </div>
                      </div>
                    </Fade>
                    <Fade
                      bottom={isMobile}
                      right={!isMobile}
                      duration={600}
                      delay={1200}
                      distance='20px'
                    >
                      <div className='project-column-2'>
                        <div className='project-wrapper-image'>
                          <a href=''>
                            <div className='project-wrapper-image-thumbnail'>
                              <img
                                src={project.src}
                                alt='Project Image'
                                className='project-image'
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </Fade>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section id='contact'>
          <div className='container'>
            <Fade duration={600} delay={200}>
              <h2 className='section-title'>Contact</h2>
            </Fade>
            <Fade bottom delay={600} distance='20px'>
              <div className='contact-wrapper'>
                <a
                  href='mailto:aramgonzalez12@hotmail.com'
                  className='contact-button'
                >
                  Send me an Email
                </a>
              </div>
            </Fade>
          </div>
        </section>
        <footer>
          <div className='container'>
            <a rel='noreferrer' href='#top' className='back-to-top'>
              <i className='fa fa-angle-up fa-2x' aria-hidden='true'></i>
              <ChevronUp size={45} />
            </a>
            <div className='social-links'>
              <a
                rel='noreferrer'
                href='https://www.linkedin.com/in/aram-ceballos-2258b717b/'
                target='_blank'
              >
                <Linkedin size={45} color='#fff' />
              </a>
              <a
                rel='noreferrer'
                href='https://www.github.com/aramceballos'
                target='_blank'
              >
                <Github size={45} color='#fff' />
              </a>
            </div>
          </div>
        </footer>
      </AppLayout>

      <style jsx>{`
        .hero {
          align-items: center;
          background: #fff;
          border-bottom: 0;
          bottom: 0;
          color: #272341;
          display: flex;
          font-weight: 400;
          height: 100vh;
          left: 0;
          margin-bottom: 0;
          min-height: 100vh;
          padding: 0 5.6rem;
          right: 0;
          top: 0;
          z-index: -1;
        }

        .container {
          margin-left: auto;
          margin-right: auto;
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          width: 100%;
        }

        .hero-title {
          font-size: 5.6rem;
          font-weight: 700;
          margin-bottom: 3.2rem;
          text-align: left;
          line-height: 1.2;
        }

        .text-color-main {
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-image: linear-gradient(135deg, #02aab0, #00cdac);
          color: transparent;
        }

        .know-more {
          display: flex;
          font-size: 1.6rem;
        }

        .know-more-button {
          display: inline-block;
          font-weight: 700;
          line-height: 1;
          padding: 0.8rem 1.6rem;
          position: relative;
          transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 1;
          -webkit-text-fill-color: #00cdac;
          border: 2px solid transparent;
          border-image: linear-gradient(135deg, #02aab0, #00cdac);
          border-image-slice: 1;
          color: #00cdac;
          font-size: 2.4rem;
        }

        .know-more-button :after {
          background-image: linear-gradient(135deg, #02aab0, #00cdac);
          bottom: 0;
          content: "";
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          width: 0;
          z-index: -1;
        }

        .know-more-button:hover {
          -webkit-text-fill-color: #fff;
          text-decoration: none;
        }

        .know-more-button:hover:after {
          width: 100%;
          -webkit-text-fill-color: #fff;
          text-decoration: none;
        }

        section {
          padding: 5rem 0;
        }

        #about {
          background-color: #02aab0;
          background-image: linear-gradient(135deg, #02aab0, #00cdac);
          border-top: 0;
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
          color: #fff;
          height: 100%;
          padding-bottom: 10%;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 700;
          margin: 0 0 4.5rem;
          text-transform: uppercase;
        }

        .row {
          --bs-gutter-x: 1.5rem;
          --bs-gutter-y: 0;
          display: flex;
          flex-wrap: wrap;
          margin-left: calc(var(--bs-gutter-x) * -0.5);
          margin-right: calc(var(--bs-gutter-x) * -0.5);
          margin-top: calc(var(--bs-gutter-y) * -1);
        }

        .row > * {
          flex-shrink: 0;
          margin-top: var(--bs-gutter-y);
          max-width: 100%;
          padding-left: calc(var(--bs-gutter-x) * 0.5);
          padding-right: calc(var(--bs-gutter-x) * 0.5);
           {
            /* width: 100%; */
          }
        }

        .about-wrapper-info {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
        }

        .about-wrapper-info-text {
          text-align: left;
          font-family: Montserrat, sans-serif;
          font-size: 1.6rem;
          margin-bottom: 1rem;
          margin-top: 0;
        }

        .button-container {
          margin-top: 1rem;
          display: flex;
        }

        .view-resume-button {
          display: inline-block;
          font-weight: 700;
          line-height: 1;
          padding: 0.8rem 1.6rem;
          position: relative;
          transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 1;
          border: 2px solid #fff;
          color: #fff;
          font-size: 1.6rem;
        }

        .view-resume-button :hover {
          color: #00cdac;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
        }

        .view-resume-button :after {
          bottom: 0;
          content: "";
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          width: 0;
          z-index: -1;
          background: #fff;
        }

        .view-resume-button:hover:after {
          width: 100%;
        }

        #projects {
          background-color: #fff;
          color: #272341;
          margin-top: -10rem;
          padding-top: 15rem;
        }

        .project-wrapper {
          margin-bottom: 15rem;
        }

        #projects .project-wrapper .row {
          margin-bottom: 8rem;
        }

        .project-wrapper-text {
          text-align: left;
        }

        .project-wrapper-text-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.8rem;
        }

        .project-description {
          margin-bottom: 1.5rem;
          font-family: Montserrat, sans-serif;
          font-size: 1.6rem;
          margin-top: 0;
        }

        .view-demo-button {
          display: inline-block;
          font-weight: 700;
          line-height: 1;
          padding: 0.8rem 1.6rem;
          position: relative;
          transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 1;
          -webkit-text-fill-color: #00cdac;
          border: 2px solid transparent;
          border-image: linear-gradient(135deg, #02aab0, #00cdac);
          border-image-slice: 1;
          color: #00cdac;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-image: linear-gradient(135deg, #02aab0, #00cdac);
          color: transparent;
          font-size: 1.6rem;
        }

        .view-demo-button :after {
          bottom: 0;
          content: "";
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          width: 0;
          z-index: -1;
          background-image: linear-gradient(135deg, #02aab0, #00cdac);
        }

        .view-demo-button :hover {
          -webkit-text-fill-color: #fff;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
        }

        .view-demo-button :hover:after {
          width: 100%;
        }

        .view-code-button {
          display: inline-block;
          font-weight: 700;
          line-height: 1;
          padding: 0.8rem 1.6rem;
          position: relative;
          transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 1;
          -webkit-text-fill-color: #00cdac;
          color: #00cdac;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-image: linear-gradient(135deg, #02aab0, #00cdac);
          color: transparent;
          font-size: 1.6rem;
        }

        .view-code-button :hover {
          transition: all 0.3s ease-in-out;
          transform: translateX(2px);
          color: #0a58ca;
        }

        .view-code-button :after {
          bottom: 0;
          content: "";
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          width: 0;
          z-index: -1;
        }

        .project-wrapper-image {
          margin: 0 auto;
          width: 90%;
        }

        .project-wrapper-image-thumbnail {
          border: none;
          box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
          box-shadow: 0 6px 10px rgb(0 0 0 / 8%), 0 0 6px rgb(0 0 0 / 5%);
          transition: all 0.2s ease-out;
          transition: transform 0.5s cubic-bezier(0.155, 1.105, 0.295, 1.12),
            box-shadow 0.5s,
            -webkit-transform 0.5s cubic-bezier(0.155, 1.105, 0.295, 1.12);
          will-change: transform;
          transform: perspective(300px) rotateX(0deg) rotateY(0deg);
          border-radius: 0.25rem;
        }

        .project-image {
          height: auto;
          max-width: 100%;
          vertical-align: middle;
          max-height: 500px;
        }

        #contact {
          background-image: linear-gradient(135deg, #02aab0, #00cdac);
          -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
          clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
          color: #fff;
          margin-bottom: -1px;
          margin-top: -10rem;
          padding: 15rem 0 10rem;
        }

        .contact-wrapper {
          backface-visibility: hidden;
          margin-top: 3.2rem;
          padding: 0 2rem;
        }

        .contact-wrapper-text {
          margin-bottom: 2.5rem;
          font-size: 2.4rem;
          font-size: 2.4rem;
        }

        .contact-button {
          display: inline-block;
          font-weight: 700;
          line-height: 1;
          padding: 0.8rem 1.6rem;
          position: relative;
          transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 1;
          border: 2px solid #fff;
          color: #fff;
          font-size: 2.4rem;
        }

        .contact-button :after {
          bottom: 0;
          content: "";
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          width: 0;
          z-index: -1;
          background: #fff;
        }

        .contact-button :hover {
          color: #00cdac;
          text-decoration: none;
        }

        .contact-button :hover:after {
          width: 100%;
        }

        footer {
          background-color: #333;
          color: #fff;
          padding: 4.8rem 0;
        }

        .social-links {
          display: flex;
          justify-content: center;
          flex-direction: row;
        }

        .social-links a {
          color: #fff;
          flex-direction: column;
          font-size: 3rem;
          height: 5rem;
          margin: 1.6rem;
          transition: all 0.2s ease-in;
          width: 5rem;
          justify-content: center;
          display: flex;
        }

        @media (min-width: 576px) {
          .container {
            max-width: 540px;
          }

          .column {
            flex: 0 0 auto;
            width: 100%;
          }

          .project-column {
            flex: 0 0 auto;
            width: 100%;
          }

          .project-column-1 {
            flex: 0 0 auto;
            width: 100%;
          }
        }

        .back-to-top {
          color: #fff;
          margin: 1rem 0 1.6rem;
          transition: all 0.2s ease-in;
        }

        @media (min-width: 768px) {
          .container {
            max-width: 720px;
          }

          .column {
            flex: 0 0 auto;
            width: 50%;
          }
        }

        @media (min-width: 992px) {
          .container {
            max-width: 960px;
          }

          .project-column {
            flex: 0 0 auto;
            width: 33.33333%;
          }

          .project-column-2 {
            flex: 0 0 auto;
            width: 66.66667%;
          }
        }

        @media (min-width: 1200px) {
          .container {
            max-width: 1140px;
          }
        }

        @media (min-width: 1400px) {
          .container {
            max-width: 1320px;
          }
        }

        @media (max-width: 75em) {
          #about {
            -webkit-clip-path: none;
            clip-path: none;
            height: 100%;
          }

          #projects {
            margin-top: 0;
            padding-top: 5rem;
          }

          .project-wrapper-image {
            margin: 0;
            width: 100%;
          }

          #contact {
            clip-path: none;
            -webkit-clip-path: none;
            margin-top: 0;
            padding: 10rem 0;
          }
        }

        @media (max-width: 70em) {
          .hero-title {
            font-size: 4rem;
          }

          .project-wrapper-text {
            margin-bottom: 4.8rem;
          }
        }

        @media (max-width: 56.25em) {
          .hero-title {
            font-size: 3.6rem;
            text-align: center;
          }

          .know-more {
            justify-content: center;
          }

          .about-wrapper-info-text {
            text-align: left;
          }
        }

        @media (max-width: 48em) {
          .about-wrapper-info {
            align-items: center;
          }

          .about-wrapper-info-text {
            text-align: center;
          }
        }

        @media (max-width: 37.5em) {
          .hero {
            padding: 0 1.6rem;
          }

          .hero-title {
            font-size: 3.5rem;
            line-height: 1.5;
          }

          .text-color-main {
            -webkit-text-fill-color: #00cdac;
            background-image: none;
          }

          .know-more-button {
            -webkit-text-fill-color: #00cdac;
            background-image: none;
            border: 2px solid #00cdac;
            font-size: 2rem;
          }

          .know-more-button :after {
            background-image: none;
          }

          .know-more-button :hover {
            -webkit-text-fill-color: #00cdac;
          }

          section {
            border: none;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .section-title {
            font-size: 2.8rem;
          }

          .about-wrapper {
            padding-bottom: 5rem;
          }

          .project-wrapper {
            margin-bottom: 0;
          }

          #projects .project-wrapper .row {
            margin-bottom: 4rem;
          }

          .project-wrapper-text {
            margin-bottom: 2.5rem;
          }

          .project-wrapper-text-title {
            font-size: 2rem;
          }

          .view-demo-button {
            -webkit-text-fill-color: #00cdac;
            background-image: none;
            border: 2px solid #00cdac;
          }

          .view-demo-button :after {
            background-image: none;
          }

          .view-demo-button :hover {
            -webkit-text-fill-color: #00cdac;
          }

          .view-code-button {
            -webkit-text-fill-color: #00cdac;
            background-image: none;
          }

          .project-wrapper-image-thumbnail {
            border: 1px solid #d2d2d2;
            box-shadow: none;
            margin-bottom: 3.2rem;
          }

          .contact-wrapper-text {
            font-size: 2rem;
          }

          .contact-button {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
