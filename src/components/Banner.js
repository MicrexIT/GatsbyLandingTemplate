import React, { Component } from 'react'
import styled from 'styled-components'
import CloseSimpleIconSVG from '../img/CloseSimpleIconSVG'

export default ({ handleClick }) => (
  <Row>
    <Banner>
      <div className='text'>
        <p className='bigcouch-company-link'>
          FilmChain client platform is <br/><strong>now available!</strong>
        </p>
      </div>
      <div className='button'>
        <a href='mailto:team@filmchain.co'>EMAIL US FOR ACCESS</a>
      </div>
      <div className='close-icon' onClick={handleClick}>
        <CloseSimpleIconSVG />
      </div>
    </Banner>
  </Row>
)

const Row = styled.div`
  position: fixed;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 100%;
  /* height: 10%; */
  /* @media screen and (min-width: 864px) {
    height: 70px;
  } */
  /* height: 144px; */
`
/**
 * STYLED - BannerRow
 */
const Banner = styled.div`
  /* height: 100%; */
  /* height: 140px; */
  border-radius: 4px;
  padding: 20px;
  padding-bottom: 26px;
  background: #151317;
  width: 100%;
  display: grid;
  /* justify-content: start; */
  /* align-items: center; */
  div.text {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    /* width: 208px; */
    p {
      /* white-space: nowrap; */
      color: #ffffff;
      font-family: 'Eina';
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      strong {
        color: ${props => props.theme.filmchainRed};
        text-decoration: underline;
      }
    }
  }

  div.close-icon {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    display: flex;
    justify-content: flex-end;
    svg {
      height: 18px;
      width: 18px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  div.button {
    height: 36px;
    border-radius: 4px;
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    background-color: #434144;

    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: block;
      color: ${props => props.theme.filmchainRed};
      text-transform: none;
      text-decoration: none;
      font-family: 'Eina';
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 0.4px;
      line-height: 16px;

      text-align: center;
      font-size: 12px;
    }
  }

  grid-template-rows: 44px 36px;
  grid-template-columns: minmax(218px,auto) 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 20px;

  @media screen and (min-width: 630px) {
    height: 70px;
    min-width: 600px;
    max-width: 35%;
    /* width: 40%; */
    /* max-width: 620px; */
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: row;
    padding-left: 30px;
    padding-right: 30px;

    div.button {
      margin-left: 25px;
      margin-right: 20px;
    }

    div.text {
      br {
        display: none;
      }
      width: auto;
      p {
        white-space: nowrap;
      }
    }
  }
`