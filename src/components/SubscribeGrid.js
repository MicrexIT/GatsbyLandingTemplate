import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Subscribe from './Subscribe'
const Grid = ({ heading, empHeading, textTitle, text }) => {
  return (
    <Div>
      <div className='tile is-ancestor'>
        <div className='tile is-parent is-6'>
          <Title className='tile is-child parent'>
            <h1
              className='has-text-centered has-text-left-desktop is-3-to-5-rem'
              style={{ color: 'white' }}
            >
              {heading} <br />
              <span>{empHeading}</span>
            </h1>
          </Title>
        </div>
        <div className='tile is-parent is-6 is-vertical'>
          <Text className='tile is-child'>
            <p className='has-text-weight-bold'>{textTitle}</p>
            <p>{text}</p>
          </Text>
          <div className='tile is-child'>
            <Subscribe />
          </div>
        </div>
      </div>
    </Div>
  )
}

export default Grid

Grid.propTypes = {
  heading: PropTypes.string,
  empHeading: PropTypes.string,
  text: PropTypes.String,
  textTitle: PropTypes.String
}
const Div = styled.div`
  margin: 0px auto;
  padding: 40px 0.75rem;
  @media screen and (min-width: 769px) {
    padding: 40px 0;
  }
`
const Title = styled.div``

const Text = styled.div`
  padding-top: 5.1875rem !important;
  padding-bottom: 4.375rem !important;

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    width: 100%;
    color: white !important;
  }

  @media screen and (min-width: 769px) {
    padding-top: 0 !important;
    padding-bottom: 9.875rem !important;
    p {
      font-size: 1.7rem;
      line-height: 2.4rem;
    }
  }

  @media screen and (min-width: 1024px) {
    p {
      font-size: 1.8rem;
      line-height: 2.6rem;
      letter-spacing: 0.1px;
    }
  }
  @media screen and (min-width: 1216px) {
    p {
      font-size: 2rem;
      line-height: 3rem;
      letter-spacing: 0.1px;
    }
  }
`
