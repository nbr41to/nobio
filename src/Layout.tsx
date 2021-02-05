import React from 'react'
import styled from 'styled-components'
import { BurgerMenu } from './BurgerMenu'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <BurgerMenu />
      <StyledHeader>
        <h1>nobio</h1>
      </StyledHeader>
      <StyledMain>
        {children}
      </StyledMain>
      <StyledFooter>
        <small><span>©</span>2021 nob</small>
      </StyledFooter>
    </>
  )
}

const StyledHeader = styled.header`
  color: #fff;
  background-color: #3549fc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  h1 {
    font-size: 40px;
    font-weight: bold;
  }
  `
const StyledMain = styled.main`
  padding: 16px;
  `
const StyledFooter = styled.footer`
  color: #fff;
  background-color: #3549fc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  small {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    
    span {
      font-size: 32px;
      margin-right: 4px;
    }
  }
`
