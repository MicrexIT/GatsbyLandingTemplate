import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import twitter from '../img/twitter.svg'
import logo from '../img/logo.svg'
import medium from '../img/medium.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='section has-background-black'>
        <div className='container is-medium'>
          <Row>
            <Left>
              <div className='is-hidden-mobile'>
                <Link to='/' title='Logo'>
                  <img src={logo} alt='FilmChain' className='filmchain-icon-footer' />
                </Link>
              </div>
              <div>
                <a
                  className='level-item is-hidden-tablet '
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='icon'>
                    <img src={medium} alt='Medium' />
                  </span>
                </a>
              </div>
              <div>
                <a
                  className='is-hidden-tablet level-item'
                  href='https://twitter.com/bigcouchfilms'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='icon'>
                    <img src={twitter} alt='Twitter' />
                  </span>
                </a>
              </div>
            </Left>
            <Right>
              <a className='is-hidden-mobile' href='mailto:team@filmchain.co'><p className='terms'> Carreers</p></a>
              <p className='terms'>Terms of Service</p>
              <p className='cop'>© 2019 FilmChain</p>
            </Right>
          </Row>
        </div>
      </footer>
    )
  }
}

export default Footer

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 769px){
     justify-content: flex-start;
  }
  .icon {
    margin-right: 3.125rem;
  }

`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    .terms {
    margin-right: 40px;
  }
  }
  p {
    color: white;
  }

  .terms {
    opacity: 0.8;
  }
  .cop {
    opacity: 0.5;
  }
`
