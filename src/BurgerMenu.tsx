import React from 'react'
import styled from 'styled-components'
import Burger from '@animated-burgers/burger-arrow'
import '@animated-burgers/burger-arrow/dist/styles.css'

type BurgerMenuProps = {

}

export const BurgerMenu: React.FC<BurgerMenuProps> = () => {
  const [open, setOpen] = React.useState(false)
  console.log(open)
  return (
    <>
      <StyledOverlay className={`${open && 'open'}`} onClick={() => setOpen(false)} />
      <StyledBurger direction="right" isOpen={open} onClick={() => setOpen(!open)} />
      <StyledMenu className={`${open && 'open'}`}>
        <h3>MENU</h3>
        <a>Top</a>
        <a>Profile</a>
        <a>Activites</a>
        <a>Output</a>
        <a>Contact</a>
      </StyledMenu >
    </>
  )
}

const StyledBurger = styled(Burger)`
  z-index: 9;
  .open .burger-lines {
    background-color: #fff;
    color: #fff;
  }
`
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100vh;
  color: #fff;
  background-color: #3549fc;
  box-shadow: -8px 0 12px #333;
  padding: 24px;

  z-index: 8;
  position: fixed;
  top: 0;
  right: -100%;
  transition: .5s;
  &.open {
    right: 0;
  }

  `
const StyledOverlay = styled.div`
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
`
