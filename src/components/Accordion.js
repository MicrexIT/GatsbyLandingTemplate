import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

class Accordion extends Component {

  handleClick = () => {
    if (this.props.open) {
      this.props.closeTab(this.props.index)
    } else {
      this.props.closeOtherTabs(this.props.index)
    }
  }

  render() {
    const { index, title, content, open} = this.props
    return (
      <Wrapper>
        {index !== 0 && <Border />}
        <Row>
          <Title>
            <Fade bottom>
              {' '}
              <p className='has-text-left has-text-weight-bold is-size-6'>{title}</p>
            </Fade>
          </Title>
          <Icon onClick={this.handleClick}>
            <Fade bottom>
              <p className='is-size-5'>{open ? '-' : '+'}</p>
            </Fade>
          </Icon>
        </Row>
        {open && (
          <Content>
            <Fade bottom>
            <p className='has-text-left is-size-6'>{content}</p>
            </Fade>
          </Content>
        )}
      </Wrapper>
    )
  }
}

export default Accordion

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  index: PropTypes.number
}

const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
`
const Border = styled.div`
  margin-top: 25px;
  height: 1px;
  opacity: 0.1;
  background-color: #d8d8d8;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  margin-top: 25px;
  width: 60%;
  p {
    color: white;
    display: inline-block;
  }
`

const Icon = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  width: 1.25rem;
  height: 1.25rem;
  color: #da6d6a;
  p {
    text-align: right;
  }
`
const Content = styled.div`
  margin-top: 10px;
  color: #a7a6b3;
  p {
    display: inline-block;
  }
`
