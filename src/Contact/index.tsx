import React from 'react'
import { Heading } from 'src/Heading'
import styled from 'styled-components'
import ContactMdx from './Contact.mdx'

export const Contact: React.FC = () => {
  return (
    <div>
      <Heading id='contact'>Contact</Heading>
      <ContactMdx />
    </div>
  )
}

const StyledContact = styled.div`

`
