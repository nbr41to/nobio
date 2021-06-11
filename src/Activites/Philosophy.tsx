import Image from 'next/image';
import React from 'react';
import { FadeInWrapper } from 'src/FadeInWrapper';
import styled from 'styled-components';
import PhilosophySentents from './Philosophy.mdx';

export const Philosophy: React.FC = () => {
  return (
    <StyledPhilosophy>
      <FadeInWrapper>
        <Image className='philosophy' src='/philosophy.png' width={960} height={540} />
        <PhilosophySentents />
      </FadeInWrapper>
    </StyledPhilosophy>
  );
};

const StyledPhilosophy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  h2 {
    margin-top: 16px;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
  }
  p {
    margin-top: 12px;
    line-height: 24px;
  }
  .philosophy {
    z-index: -1;
  }
`;
