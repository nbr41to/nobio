import React from 'react';
import styled from 'styled-components';
import Burger from '@animated-burgers/burger-arrow';
import { Link, animateScroll as scroll } from "react-scroll";
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useRouter } from 'next/router';

type BurgerMenuProps = {

};

export const BurgerMenu: React.FC<BurgerMenuProps> = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    if (open) {
      disableBodyScroll(document.body);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [open]);

  if (router.pathname === '/') {
    return (
      <>
        <StyledOverlay className={`${open && 'open'}`} onClick={() => setOpen(false)} />
        <StyledBurger direction="right" isOpen={open} onClick={() => setOpen(!open)} />
        <StyledMenu className={`${open && 'open'}`}>
          <nav>
            <h3>MENU</h3>
            <Link
              to=''
              smooth={true}
              duration={1000}
              offset={-8}
              onClick={() => {
                setOpen(false);
                scroll.scrollToTop();
              }}>
              Top
          </Link>
            <Link
              to='profile'
              smooth={true}
              duration={1000}
              offset={-8}
              onClick={() => setOpen(false)}
            >
              Profile
          </Link>
            <Link
              to='activites'
              smooth={true}
              duration={1000}
              offset={-8}
              onClick={() => setOpen(false)}
            >
              Activites
          </Link>
            <Link
              to='output'
              smooth={true}
              duration={1000}
              offset={-8}
              onClick={() => setOpen(false)}
            >
              Output
          </Link>
            <Link
              to='contact'
              smooth={true}
              duration={1000}
              offset={-8}
              onClick={() => setOpen(false)}
            >
              Contact
          </Link>
          </nav>
        </StyledMenu >
      </>
    );
  } else {
    return <StyledBackButton direction="left" isOpen onClick={() => router.back()} />;
  }
};

const StyledBurger = styled(Burger)`
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 9;
`;
const StyledMenu = styled.nav`
  width: 75%;
  max-width: 300px;
  height: 100vh;
  color: #fff;
  background-color: rgba(53, 73, 252, 0.9);
  box-shadow: -8px 0 12px #333;
  padding: 24px;
  
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 7;
  transition: .5s;
  &.open {
    right: 0;
  }
  nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 120px;
    h3 {
      width: 100%;
      font-size: 32px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 8px;
      padding: 16px 0;
      border-bottom: 2px solid #ccc;
    }
    a {
      width: 100%;
      text-align: center;
      padding: 12px;
      font-size: 28px;
      margin: 4px;
      &:hover {
        background-color: #666;
        border-radius: 8px;
        text-decoration: underline;
      }
    }
  }

  `;
const StyledOverlay = styled.div`
  overflow: hidden;
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &.open {
    display: block;
  }
`;
const StyledBackButton = styled(Burger)`
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 9;
`;
