import React from 'react'
import styled from 'styled-components'
import background from '../img/overlay-video.png'

const BackgroundImage = () => {
  return (
    <Image>
      <img src={background} alt='' />
    </Image>
  )
}

export default BackgroundImage

const Image = styled.div`
  position: absolute;
  z-index: -5;
  bottom: 0;
  left: 0;
  right: 0;
  /* width: 100%; */
  height: 280px;
  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
`
