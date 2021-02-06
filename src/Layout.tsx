import React from 'react'
import styled from 'styled-components'
import { BurgerMenu } from './BurgerMenu'
import Link from 'next/link'
import Image from 'next/image'
import { Gou } from './Gou'

export const Layout: React.FC = ({ children }) => {
  const [isOrange, setIsOrange] = React.useState(false)
  return (
    <>
      <StyledHeader isOrange={isOrange}>
        <Image
          className='logo'
          src='/logo.png'
          width={40}
          height={40}
          onClick={() => setIsOrange(!isOrange)}
        />
        <Link href='/'><a className='site-title'>nobio</a></Link>
        <BurgerMenu />
      </StyledHeader>
      <StyledMain>
        {children}
        {/* <Gou /> */}
      </StyledMain>
      <StyledFooter isOrange={isOrange}>
        <small><span>©</span>2021 nob</small>
        <p>Thak you for reading!!</p>
      </StyledFooter>
    </>
  )
}

const StyledHeader = styled.header<{ isOrange: boolean }>`
  color: #fff;
  background-color: ${({ isOrange }) => isOrange ? '#f7a145' : '#3549fc'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  .site-title {
    font-size: 36px;
    font-weight: bold;
  }
  .logo {
    animation: r1 5s linear infinite;
    @keyframes r1 {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }
  `
const StyledMain = styled.main`
  padding: 16px;
  `
const StyledFooter = styled.footer<{ isOrange: boolean }>`
  color: #fff;
  background-color:${({ isOrange }) => isOrange ? '#f7a145' : '#3549fc'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 8px 0;
  small {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    span {
      /* font-size: 24px; */
      margin-right: 4px;
    }
  }
  p {
    color: #3549fc;
  }
`
