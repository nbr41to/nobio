import React from 'react'
import { Heading } from 'src/Heading'
import styled from 'styled-components'
import { CardBox } from './CardBox'
import { Philosophy } from './Philosophy'

export const Activites: React.FC = () => {
  return (
    <>
      <Heading>Activites</Heading>
      <hr />
      <StyledActivites>
        <Philosophy />
        <CardBox />
      </StyledActivites>
    </>
  )
}

const StyledActivites = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
