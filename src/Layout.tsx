import React from 'react';
import styled from 'styled-components';
import { BurgerMenu } from './BurgerMenu';
import Link from 'next/link';
import Image from 'next/image';

export const Layout: React.FC = ({ children }) => {
  const [isOrange, setIsOrange] = React.useState(false);
  return (
    <>
      <StyledHeader isOrange={isOrange}>
        <div className='logo'>
          <Image
            src='/logo.png'
            width={40}
            height={40}
            onClick={() => setIsOrange(!isOrange)}
          />
        </div>
        <Link href='/'>
          <a className='site-title'>nobio</a>
        </Link>
        <div className='site-title-fixed'>nobio</div>
        <BurgerMenu />
        <div className='blur-header'></div>
      </StyledHeader>
      <StyledMain>
        {children}
        {/* <Gou /> */}
      </StyledMain>
      <StyledFooter isOrange={isOrange}>
        <small>
          <span>©</span>2021 nob{' '}
        </small>
        <p>{'　'} Thank you for reading!!</p>
      </StyledFooter>
    </>
  );
};

const StyledHeader = styled.header<{ isOrange: boolean }>`
  color: #fff;
  background-color: ${({ isOrange }) => (isOrange ? '#f7a145' : '#3549fc')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  .site-title {
    font-size: 36px;
    font-weight: bold;
    z-index: 5;
    cursor: pointer;
  }
  .site-title-fixed {
    font-size: 36px;
    font-weight: bold;
    margin-top: 4px;
    margin-left: 4px;
    position: fixed;
    top: 12px;
    z-index: 3;
    color: rgba(0, 0, 0, 0.4);
  }
  .logo {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 3;
    animation: r1 5s linear infinite;
    @keyframes r1 {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
  }
  .blur-header {
    width: 100%;
    height: 65px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /* background-color: rgba(255,255,255,0.3); */
    /* backdrop-filter: blur(8px); // iOSでダメ */
  }
`;
const StyledMain = styled.main`
  min-height: 100vh;
  padding: 20px;
  padding-bottom: 54px;
`;
const StyledFooter = styled.footer<{ isOrange: boolean }>`
  width: 100%;
  color: #fff;
  background-color: ${({ isOrange }) => (isOrange ? '#f7a145' : '#3549fc')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 8px 0;
  position: absolute;
  bottom: 0;
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
`;
