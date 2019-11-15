import React, { Component } from 'react'
import styled from 'styled-components'
import send from '../img/btn-send.svg'
class Subscribe extends Component {
  state = {
    sent: false,
    email: undefined
  }

  handleChange = (event ) => {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({ sent: true })
  }

  render() {
    return (
      <Col>
        <Row>
          {!this.state.sent ? (
            <>
              <Input

                id='email'
                type='email'
                name='email'
                value={this.state.email}
                placeholder='enter e-mail address'
                required
                className='is-size-5 is-size-3-desktop'
              />
              <Button onClick={this.handleSubmit}>
                <img src={send} alt='->' />
              </Button>
            </>
          ) : (
            <Text>
              <p className='is-size-5 is-size-3-desktop'>Email Registered!</p>
            </Text>
          )}
        </Row>
        <Border />
      </Col>
    )
  }
}

export default Subscribe

const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Button = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    width: 1.5rem;
    height: 1.5rem;
  }
  @media screen and (min-width: 1026px) {
    width: 1.7rem;
    height: 1.7rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    opacity: 0.5;
  }
`

const Border = styled.div`
  height: 2px;
  opacity: 0.1;
  background-color: #ffffff;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Input = styled.input`
  background: none !important;
  border: 0 !important;
  display: block !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
  box-shadow: none !important;
  outline: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 12px;
  color: white;
  background-color: transparent;
  @media screen and (min-width: 769px) {
    margin-bottom: 19.5px;
  }
  @media screen and (min-width: 1026px) {
    margin-bottom: 27px;
  }
`
const Text = styled.div`
  margin-bottom: 12px;
  @media screen and (min-width: 769px) {
    margin-bottom: 19.5px;
  }
  @media screen and (min-width: 1026px) {
    margin-bottom: 27px;
  }
  p {
    width: 100%;
    color: #8fb556;
  }
`