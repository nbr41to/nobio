import React from 'react'
import { Heading } from 'src/Heading'
import styled from 'styled-components'

export const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <Heading>Profile</Heading>

    </StyledProfile>
  )
}

const StyledProfile = styled.div`
  margin-top: 24px;
`
