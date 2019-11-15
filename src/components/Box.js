import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

const Box = ({ title, content }) => (
  <Wrapper>
     <Fade  Bottom>
    <Border />
    </Fade>

    <Title>
      <Fade bottom>
      <p className='has-text-left has-text-weight-bold is-size-4'>{title}</p>
      </Fade>
    </Title>

    <Content>
    <Fade bottom>
      <p className='has-text-left is-size-4'>
       {content}
      </p>
      </Fade>
    </Content>
  </Wrapper>
)

export default Box

Box.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
`
const Border = styled.div`
  height: 2px;
  background: linear-gradient(270deg, rgba(22,17,23,0) 0%, #443547 100%);
  margin-top: 20px;
`
const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  width: 60%;
  max-width: 620px;
  p {
    display: inline-block;
  }
`

const Content = styled.div`
  margin-top: 20px;
  color: #a7a6b3 !important;
  max-width: 622px;
  /* opacity: 0.5; */
  p {
    display: inline-block;
  }
`
