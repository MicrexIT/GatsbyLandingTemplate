import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const CardsGrid = ({ gridItems, heading, empHeading }) => (
  <Fade bottom cascade>
    <Grid>
      <Title className='has-text-centered-mobile has-text-centered-tablet has-text-left-desktop is-3-to-5-rem'>
        {heading}
        <br />
        <span> {empHeading}</span>
      </Title>
      {gridItems.map(item => (
        <div>
          <Fade bottom cascade>
            <FlexCard className='has-text-centered' key={item.name}>
              <Image>
              <PreviewCompatibleImage imageInfo={item} />
                {/* <img src={item.image} /> */}
              </Image>
              <div>
                <p className='has-text-weight-bold is-size-4-desktop is-size-6 name'>
                  {item.name}
                </p>
              </div>
              <div>
                <p className='position'>{item.position}</p>
              </div>
            </FlexCard>
          </Fade>
        </div>
      ))}
    </Grid>
  </Fade>
)

CardsGrid.propTypes = {
  heading: PropTypes.string,
  empHeading: PropTypes.string,
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,

//  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      position: PropTypes.string
    })
  )
}

export default CardsGrid

const Image = styled.div`
  align-self: flex-start;
  /* justify-self: flex-start; */
  /* flex-shrink: 0; */
  /* flex-basis: auto; */
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 120px;
  height: 120px;

  @media screen and (min-width: 769px) {
    width: 180px;
    height: 180px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 1.25rem;
    width: 180px !important;
    height: 180px !important;
  }

  @media screen and (min-width: 1216px) {
    margin-bottom: 1.25rem;
    width: 220px !important;
    height: 220px !important;
  }

  @media screen and (min-width: 1408px) {
    margin-bottom: 1.25rem;
    width: 250px !important;
    height: 250px !important;
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

const Grid = styled.div`
  padding: 40 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  /* margin: 0 20px; */
  /* margin-bottom: 89px; */
  justify-content: start;
  align-items: start;
  @media screen and (min-width: 769px) {
    /* margin: 109px 100px 131px 100px;
    grid-column-gap: 40px;
    grid-template-columns: repeat(2, minmax(284px, auto));
    grid-template-rows: repeat(2, 280px); */
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* grid-template-rows: 1fr 1fr 1fr; */
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
    grid-column-gap: 70px;
    grid-row-gap: 120px;
  }
  @media screen and (min-width: 1216px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* grid-template-rows: 1fr 1fr 1fr; */
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    grid-column-gap: 90px;
    grid-row-gap: 120px;
  }
  @media screen and (min-width: 1408px) {
    max-width: 1552px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* grid-template-rows: 1fr 1fr 1fr; */
    padding-left: 40px;
    padding-right: 40px;
    grid-column-gap: 100px;
    grid-row-gap: 120px;
  }
`
const Title = styled.h1`
  color: white;
  display: block;
  grid-column: 1 / 3;
  margin-bottom: 81px;
  br {
    height: 0;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 42px;
    padding-top: 42px;
    font-size: 5rem;
    line-height: 5rem;
  }
`

const FlexCard = styled.div`
  align-self: start;
  justify-self: start;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  div {
    width: 100%;
  }
  p {
    width: 100%;
    display: block;
  }
  .name {
    color: white;
  }
  .position {
    font-size: 0.875rem;
    color: #a7a6b3;
  }
  @media screen and (min-width: 769px) {
    font-size: 1rem;
    /* margin: 109px 100px 131px 100px;
    grid-column-gap: 40px;
    grid-template-columns: repeat(2, minmax(284px, auto));
    grid-template-rows: repeat(2, 280px); */
  }
`
