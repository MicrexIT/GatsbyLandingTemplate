import React from 'react'
import styled from 'styled-components'

const GradientBar = ({isMarginless}) => {

  return (
    <Div
      isMarginless={isMarginless}
    />
 )
}
export default GradientBar

const Div = styled.div`
  margin-top: 0;
  width: 100%;
  border-radius: 4px;
  height: 0.25rem;
  width: 2.5rem;
  background: linear-gradient(0deg, #7f5692 0%, #dc6e69 100%);
  margin-bottom: 40px;
  @media screen and (min-width: 769px) {
    margin-bottom: 80px;
  }
  /* margin: ${props => props.isMarginless && '0'}; */
`
