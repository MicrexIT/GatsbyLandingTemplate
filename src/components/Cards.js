import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const CardsGrid = ({ gridItems }) => (
    <Grid>
      {gridItems.map(item => (
        // <Div>
        <Flex key={item.text}>
          <Image>
          {/* <PreviewCompatibleImage imageInfo={item} /> */}
            <img src={item.image} />
          </Image>
          <Text>
            <p className='is-size-4-desktop is-size-6'>{item.text}</p>
          </Text>
        </Flex>
        // </Div>
      ))}
    </Grid>
)

CardsGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string
    })
  )
}

export default CardsGrid

const Div = styled.div`
  height: 100%;
`
const Flex = styled.div`
  /* height: 280px !important; */
  width: 100%;
  border-radius: 11px;
  border: 1px solid #1f1a20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem 1.5rem;
  @media screen and (min-width: 1024px) {
    padding-left: 3rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`

const FlexItem = styled.div`
  width: 100%;
  margin-top: 1.25rem;
  @media screen and (min-width: 1024px) {
    margin-top: 0;
    margin-right: 2.5rem;
  }
`

const Text = styled(FlexItem)`
  /* @media screen and (min-width: 769px) {
    width: 70%;
  } */

  @media screen and (min-width: 1024px) {
    width: 28.75rem;
    /* width: 28.75rem; */
    width: auto;
  }

  p {
    color: white;
    width: 100%;
    display: block;
  }
`

const Image = styled(FlexItem)`
  flex-shrink: 0;
  width: 40px;
  min-height: 33px;

  @media screen and (min-width: 769px) {
    width: 50px;
    /* width: 5vw; */
    height: 50px;
  }

  @media screen and (min-width: 1024px) {
    width: 64px;
    height: 60px;
    /* width: 5vw; */
    /* height: 5vw; */
    /* min-height: 50px; */
  }

  img {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 165px);
  grid-row-gap: 40px;
  margin: 80px auto 40px;
  @media screen and (min-width: 769px) {
    margin: 109px auto;
    margin-bottom: 0px;
    grid-column-gap: 40px;
    grid-template-rows: repeat(2, 280px);
    grid-template-columns: repeat(2, minmax(284px, auto));
  }
  @media screen and (min-width: 1024px) {
    grid-column-gap: 50px;
    grid-template-columns: repeat(2, minmax(500px, 760px));
  }
  @media screen and (min-width: 1206px) {
    grid-column-gap: 80px;
  }
`
