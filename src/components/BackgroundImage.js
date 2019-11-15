import React from 'react'
import styled from 'styled-components'
import background from '../img/features-bg.png'

const BackgroundImage = () => {
  return (
    <Image>
      <img src={background} alt=''/>
    </Image>
  );
}

export default BackgroundImage;

const Image = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`