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
}

li {
  width: 100%;
  text-align: center;
  padding: 8px 0;
  &:hover {
    background-color: peachpuff;
    transition: 0.8s;
    a {
      border-bottom: 2px solid orange;
      transition: 0.8s;
    }
  }
  &:active {
    background-color: orange;
    color: #fff;
  }
  a {
    display: inline-block;
    padding: 4px 12px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid navy;
  }
}
`
