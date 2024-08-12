import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: #088395;
  font-family: 'Courier New', Courier, monospace;
  display: inline-block;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 992px) {
    font-size: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const LogoComponent = () => {
  return <Logo>&lt;Arun/&gt;</Logo>;
};

export default LogoComponent;
