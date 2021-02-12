import React from 'react'
import styled, { css } from 'styled-components'

export type AccordionProps = {
  label: string
  labelColor?: string
  bgColor?: string
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({ label, labelColor = '#333', bgColor = '#ccc', children, className }) => {
  const [open, setOpen] = React.useState(false)

  const he2rgb = (colorCode: string): string => {
    // RGBA
    if (colorCode.slice(0, 4) === "rgba") return colorCode = colorCode.slice(5, -3)
    // RGB
    if (colorCode.slice(0, 3) === "rgb") return colorCode = colorCode.slice(4, -1)
    // HEX
    if (colorCode.slice(0, 1) === "#") colorCode = colorCode.slice(1)
    if (colorCode.length == 3) colorCode = colorCode.slice(0, 1) + colorCode.slice(0, 1) + colorCode.slice(1, 2) + colorCode.slice(1, 2) + colorCode.slice(2, 3) + colorCode.slice(2, 3)
    return [colorCode.slice(0, 2), colorCode.slice(2, 4), colorCode.slice(4, 6)].map((str: string) => parseInt(str, 16)).join()
  }

  return (
    <StyledAccordion className={className}>
      <StyledLabelBox labelColor={labelColor} bgColor={bgColor} onClick={() => setOpen(!open)}>
        <StyledLabel>{label}</StyledLabel>
        <ArrowIcon open={open} color={labelColor} />
      </StyledLabelBox>
      <StyledDetail open={open} bgColorRGB={() => he2rgb(bgColor)}>
        {children}
      </StyledDetail>
    </StyledAccordion>
  )
}

const StyledAccordion = styled.div`
  width: 100%;
`
const StyledLabelBox = styled.div<{ labelColor: string, bgColor: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ labelColor }) => labelColor};
  background-color: ${({ bgColor }) => bgColor};
  padding: 8px 16px;
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
  cursor: pointer;
  margin: 1px 0;
  box-sizing: border-box;
  border-radius: 2px;
`
const StyledLabel = styled.div`
`
const ArrowIcon = styled.div<{ color: string, open: boolean }>`
  position: relative;
  display: inline-block;
  padding-left: 20px;
  &:before{
  content: '';
    width: 6px;
    height: 6px;
    border: 0px;
    border-top: solid 2px ${({ color }) => color};
    border-right: solid 2px ${({ color }) => color};
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: ${({ open }) => open ? '-2px' : '-6px'};
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(135deg)'};
    transition: .5s ease-in-out;
  }
`
const StyledDetail = styled.div<{ open: boolean, bgColorRGB: any }>`
  word-wrap: break-word;
  background-color: rgba(${({ bgColorRGB }) => bgColorRGB}, 0.3);
  overflow-y: scroll;
  padding: 0 24px;
  max-height: 0;
  opacity: 0;
  ${({ open }) => open &&
    css`
      max-height: 400px;
      padding: 16px 24px;
      opacity: 1;
      margin: -1px 0;
    `
  };
  transition: .5s ease-in-out;
`
