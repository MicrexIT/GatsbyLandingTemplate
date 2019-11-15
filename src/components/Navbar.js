import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import twitter from '../img/twitter.svg'
import logo from '../img/logo.svg'
import medium from '../img/medium.svg'

// make the navbare a level then gg

const Navbar = class extends React.Component {
  render() {
    return (
        <Nav className='level is-mobile' aria-label='main-navigation'>
          {/* <div className='level is-four-fifths is-three-fourth-tablet is-two-thirds-mobile'> */}
          <div className='level-left'>
            <Link to='/' title='Logo'>
              <img src={logo} alt='FilmChain' className='filmchain-icon' />
            </Link>
          </div>

          <div className='level-right'>
            <a
              className='level-item is-hidden-mobile '
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='icon'>
                <img src={medium} alt='Medium' />
              </span>
            </a>
            <a
              className='is-hidden-mobile level-item'
              href='https://twitter.com/bigcouchfilms'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='icon'>
                <img src={twitter} alt='Twitter' />
              </span>
            </a>
            <Link to='/login' title='Login'>
              <a className={`level-item btn`}>LOG IN</a>
            </Link>
          </div>
        </Nav>
    )
  }
}

export default Navbar

const Nav = styled.nav`
  @media screen and (min-width: 769px) and (max-width: 1216px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`