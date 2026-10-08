import React from 'react';
import styled from 'styled-components';
import backendAiIllustration from '../../images/backend-ai-illustration.svg';

const AboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const SkillsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 8px 10px;
  padding: 0;
  margin: 20px 0 0;
  overflow: hidden;
  list-style: none;

  li {
    position: relative;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-sm);

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--green);
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: var(--navy);

    &:hover,
    &:focus {
      background: transparent;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 20px;
      left: 20px;
      width: 100%;
      height: 100%;
      border: 2px solid var(--green);
      border-radius: 4px;
      z-index: -1;
      transition: var(--transition);
    }

    &:hover:after,
    &:focus:after {
      top: 15px;
      left: 15px;
    }
  }

  .profile-illustration {
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    transition: var(--transition);
  }
`;

const About = () => {
  const skills = [
    'Node.js',
    'TypeScript',
    'NestJS',
    'Python',
    'PostgreSQL',
    'MySQL',
    'REST APIs',
    'LLM APIs',
    'RAG',
    'LangChain',
    'MCP',
    'Docker',
  ];

  return (
    <AboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <div>
          <div>
            <p>
              I'm a Software Engineer focused on building reliable backend systems, scalable APIs,
              and AI-powered applications.
            </p>

            <p>
              My main stack includes Node.js, TypeScript, NestJS, Python, PostgreSQL, and MySQL. I
              enjoy designing backend architectures, relational database schemas, authentication
              systems, and integrations with external services.
            </p>

            <p>
              More recently, I've been working with{' '}
              <span className="highlight">
                LLM APIs, RAG pipelines, LangChain, MCP, and multi-agent workflows
              </span>{' '}
              to build intelligent systems that can interact with real-world data and tools.
            </p>

            <p>
              I also have experience integrating services such as Stripe, building REST APIs,
              working with Docker and CI/CD pipelines, and developing systems that are designed to
              be maintainable and production-ready.
            </p>

            <p>Here are some technologies I've been working with recently:</p>
          </div>

          <SkillsGrid>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </SkillsGrid>
        </div>

        <StyledPic>
          <div className="wrapper">
            <img
              className="profile-illustration"
              src={backendAiIllustration}
              alt="Abstract illustration of REST APIs, databases, LLM and RAG services, and MCP tools connected to an AI workflow"
            />
          </div>
        </StyledPic>
      </div>
    </AboutSection>
  );
};

export default About;
