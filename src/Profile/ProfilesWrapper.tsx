import React from 'react'
import styled from 'styled-components'

export const ProfilesWrapper: React.FC = ({ children }) => {
  return (
    <StyledProfiles>
      {children}
    </StyledProfiles>
  )
}

const StyledProfiles = styled.div`
  padding: 12px 24px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 8px 0;
  }
  p {
    margin-bottom: 12px;
    padding: 0 4px;
    line-height: 24px;
  }
`
