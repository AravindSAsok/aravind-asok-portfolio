import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 600px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .new-portfolio-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 18px;
    padding: 15px 20px;
    border: 1px solid var(--green);
    border-radius: 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

    &:hover,
    &:focus-visible {
      background: var(--green);
      color: var(--navy);
      transform: translateY(-2px);
    }

    span {
      font-size: 1.2em;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, I'm Aravind S Asok.</h1>;

  const two = <h2 className="big-heading">I build scalable backend systems.</h2>;

  const three = <h3 className="big-heading">And AI-powered applications.</h3>;

  const four = (
    <>
      <p>
        I'm a Software Engineer focused on building reliable APIs, backend architectures, and
        intelligent workflows. I work with Node.js, TypeScript, NestJS, Python, PostgreSQL, and
        modern AI technologies including LLM APIs, RAG, and multi-agent systems.
      </p>
    </>
  );

  const five = (
    <a className="email-link" href="/#contact">
      Get in touch
    </a>
  );

  const six = (
    <a
      className="new-portfolio-link"
      href="https://aravindsasok.github.io/v13_dot_one/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Explore my new portfolio <span aria-hidden="true">↗</span>
    </a>
  );

  const items = [one, two, three, four, five, six];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
