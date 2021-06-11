import React from 'react';
import { FadeInWrapper } from 'src/FadeInWrapper';
import { Heading } from 'src/Heading';
import styled from 'styled-components';
import ContactMdx from './Contact.mdx';

export const Contact: React.FC = () => {
  return (
    <FadeInWrapper>
      <Heading id='contact'>Contact</Heading>
      <ContactMdx />
    </FadeInWrapper>
  );
};

const StyledContact = styled.div`

`;
