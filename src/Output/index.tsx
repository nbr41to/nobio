import React from 'react'
import { Heading } from 'src/Heading'
import styled from 'styled-components'
import OutputMdx from './Output.mdx'

export const Output: React.FC = () => {
  return (
    <StyledOutput>
      <Heading id='output'>Output</Heading>
      <OutputMdx />
    </StyledOutput>
  )
}

const StyledOutput = styled.div`
  width: 100%;
`
