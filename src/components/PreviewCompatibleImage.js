import React from 'react'
import PropTypes from 'prop-types'
// import Img from 'gatsby-image'
import Img from "gatsby-image"

const PreviewCompatibleImage = ({ imageInfo, ...rest }) => {
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain !important'

  }
  const { alt = '', childImageSharp, image } = imageInfo
  console.log('imageInfo', imageInfo);

  if (!!image && !!image.childImageSharp) {
    console.log('case1');
    return (
      // <Img style={imageStyle} objectFit="contain" fluid={image.childImageSharp.fluid} alt={alt} />
      <Img imgStyle={imageStyle} style={imageStyle} objectFit="contain" fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {

    console.log('case2');
    return <Img imgStyle={imageStyle} style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')

    console.log('case3');
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
