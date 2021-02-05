import React, { Children } from 'react'
import styled from 'styled-components'

export const Heading: React.FC = ({ children }) => {
  return (
    <StyledHeading>
      <h2>{children}</h2>
    </StyledHeading>
  )
}

const StyledHeading = styled.div`
  width: 100%;
  padding: 14px;
  h2 {
    position: relative;
    padding: 4px 48px 2px;
    background: #3549fc;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin-left: -33px;
    line-height: 1.3;
    border-bottom: solid 4px navy;
    z-index:-2;
  }

  h2:before {
    position: absolute;
    content: '';
    left: -2px;
    top: -2px;
    width: 0;
    height: 0;
    border: none;
    border-left: solid 40px white;
    border-bottom: solid 79px transparent;
    z-index: -1;
  }

  h2:after {
    position: absolute;
    content: '';
    right: -3px;
    top: -7px;
    width: 0;
    height: 0;
    border: none;
    border-left: solid 40px transparent;
    border-bottom: solid 79px white;
    z-index: -1;
  }
`
