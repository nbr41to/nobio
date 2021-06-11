import React from 'react';
import { FadeInWrapper } from 'src/FadeInWrapper';
import { Heading } from 'src/Heading';
import styled from 'styled-components';
import OutputMdx from './Output.mdx';

export const Output: React.FC = () => {
  return (
    <FadeInWrapper>
      <StyledOutput>
        <Heading id='output'>Output</Heading>
        <OutputMdx />
      </StyledOutput>
    </FadeInWrapper>
  );
};

const StyledOutput = styled.div`
  width: 100%;
`;
