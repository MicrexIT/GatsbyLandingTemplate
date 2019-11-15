import React from 'react'
import styled from 'styled-components'
import Border from './Border'
import GradientBorder from './GradientBorder'
import Divider from './Divider'
const Section = ({
  children,
  hasBorder,
  hasGradientBorder,
  hasDivider,
  hasStyle,
  hasNoPaddingTop
}) => {
  let style = hasStyle ? hasStyle : {}
  return (
    <Div style={style} hasDivider={hasDivider} hasNoPaddingTop={hasNoPaddingTop}>
      {hasDivider && <Divider />}
      {children}
      {hasBorder && <>{hasGradientBorder ? <GradientBorder /> : <Border />}</>}
    </Div>
  )
}

export default Section

const Div = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;
  padding-bottom: 62px;
  padding-top: 0;
  padding-top: ${props => !props.hasDivider && '40px'};
  .container {
    margin: 0 5vw;
  }
  @media screen and (min-width: 1024px) {
    padding-top: ${props => !props.hasDivider && '80px'};
    /* padding-top: 80px; */
    padding-bottom: 100px;
  }
  /* padding-top: ${props => props.hasNoPaddingTop && '0'}; */
`
