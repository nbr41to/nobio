import React from 'react'
import styled from 'styled-components'

export const MdxWrapper: React.FC = ({ children }) => {
  return (
    <StyledMdxWrapper>
      {children}
    </StyledMdxWrapper>
  )
}

const StyledMdxWrapper = styled.div`
p {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    width: 100%;
    padding: 16px 0;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    &:hover {
      background-color: peachpuff;
    }
  }
}
`
