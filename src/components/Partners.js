import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import PreviewCompatibleImage from './PreviewCompatibleImage'
const Partners = ({ items, heading, empHeading }) => (
  <Fade bottom cascade>
    <Col>
      <h1 className='has-text-centered is-3-to-5-rem' style={{ color: 'white' }}>
        {heading} <br className='is-hidden-tablet' />
        <span>{empHeading}</span>
      </h1>
      <Grid>
        {items.map(item => (
          <Image>
            <PreviewCompatibleImage imageInfo={item} />
            {/* <img src={item.image} /> */}
          </Image>
        ))}
      </Grid>
    </Col>
  </Fade>
)

Partners.propTypes = {
  empHeading: PropTypes.string,
  heading: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      image: PropTypes.string
    })
  )
}

export default Partners

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  margin-right: 5vw;
  margin-left: 5vw;
  margin-bottom: 40px;
  opacity: 0.5;
  justify-self: center;
  &:hover {
    opacity: 1;
  }
  @media screen and (min-width: 769px) {
    width: 12vw;
    max-width: 150px;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1024px) {
    width: 180px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1216px) {
    width: 190px;
    margin-left: 45px;
    margin-right: 45px;
    margin-bottom: 80px;
  }
  /* @media screen and (min-width: 1024px) {

  }
  @media screen and (min-width: 1216px) {
    grid-column-gap: 120px;
    margin-bottom: 131px;
    grid-template-columns: repeat(4, 180px);
  }
  @media screen and (min-width: 1408px) {
    grid-column-gap: 140px;
    margin-bottom: 131px;
    grid-template-columns: repeat(4, 200px);
  } */
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;

  @media screen and (min-width: 769px) {
    max-width: 80%;
    margin-top: 114px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 90%;
  }
  @media screen and (min-width: 1216px) {
    /* width: 60%; */
    width: 100%;
    max-width: 1100px;
    margin-top: 114px;
  }
`
