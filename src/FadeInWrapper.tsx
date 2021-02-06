import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

export const FadeInWrapper: React.FC<{ className?: string }> = ({ className = '', children }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } })
  return (
    <StyledFadeInWrapper className={className} style={props}>
      {children}
    </StyledFadeInWrapper>
  )
}

const StyledFadeInWrapper = styled(animated.div)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`
