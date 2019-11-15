import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Div100vh from 'react-div-100vh'
import NavBar from '../components/Navbar'
import Layout from '../components/Layout'
import { Z_BLOCK } from 'zlib'
import Cards from '../components/Cards'
import Team from '../components/Team'
import BackgroundImage from '../components/BackgroundImage'
import Features from '../components/Features'
import SubscribeGrid from '../components/SubscribeGrid'
import Partners from '../components/Partners'
import Section from '../components/Section'
import Fade from 'react-reveal/Fade'
import Logos from '../components/Logos'
import BackgroundHero from '../components/BackgroundBottom'
import HeroDiv from '../components/heroDiv/HeroDiv'

export const IndexPageTemplate = ({
  title,
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8
}) => (
  <div>
    {/* TODO: background: 'url(img/overlay-video.png)' */}
    <HeroDiv dontResize style={{ height: '100rvh' }}>
      <section
        className='hero is-fullheight video'
        style={{
          height: '100% !important',
          position: 'relative'
        }}
      >
        <div
          className='hero-video'
          style={{
            display: 'block',
            height: '100%'
            // minHeight: '100%',
          }}
        >
          <BackgroundHero />
          <video
            style={{
              position: 'relative',
              left: '0',
              top: '0',
              transform: 'none',
              objectFit: 'cover',
              zIndex: -10
            }}
            poster={'img/bg-mobile.jpg'}
            id='bgvid'
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={'img/FilmChain.mp4'} type='video/mp4' />
            <source src={'img/FilmChain.webm'} type='video/webm' />
          </video>
        </div>
        <div className='hero-head'>
          <div className='has-text-centered is-5-to-10-margin'>
            <NavBar />
          </div>
        </div>
        <div className='hero-body'>
          <div className='is-5-to-10-margin hero--text'>
            <div className='columns'>
              <h1
                className='column has-text-left-desktop has-text-centered-touch is-2-to-4-rem is-two-thirds-desktop is-two-thirds-widescreen is-two-thirds-fullhd'
                style={{
                  color: 'white'
                }}
              >
                {page1.heading}
              </h1>
              <div className='column is-hidden-mobile is-hidden-touch' />
            </div>
            <div className='columns is-centered'>
              <h3
                // className='column has-text-left-desktop has-text-centered-touch hero--h3 is-two-thirds-desktop'
                className='column has-text-left-desktop has-text-centered-touch is-size-6-mobile is-size-5-tablet is-size-4-desktop is-two-thirds-tablet is-two-thirds-desktop is-half-widescreen is-half-fullhd hero--padding-right'
                style={{
                  color: '#A7A6B3'
                }}
              >
                {page1.subheading}
              </h3>
              <div className='column is-hidden-mobile is-hidden-touch' />
            </div>
          </div>
        </div>
      </section>
    </HeroDiv>

    <Logos />
    <Section
      // className='margin-top-0'
      hasGradientBorder
      hasDivider
      hasBorder
      hasStyle={{
        backgroundColor: '#110D12',
        background: 'radial-gradient(circle at top center, #1F1A20 0%, #110D12 100%)',
        position: 'relative'
      }}
    >
      <div className='container'>
        <Fade bottom>
          <h1
            className='has-text-centered is-3-to-5-rem'
            style={{
              color: 'white'
            }}
          >
            {page2.heading} <span>{page2.empHeading}</span>
          </h1>
        </Fade>
        <Fade bottom>
          <Cards gridItems={page2.cards} />
        </Fade>
      </div>
    </Section>

    <Section hasDivider={false} hasBorder={false} hasGradientBorder={false}>
      <div className='container has-text-centered'>
        <Fade bottom>
          <H1Gradient className='has-text-centered is-2-to-4-rem'>
            {page3.description1} <br className='is-hidden-tablet' />{' '}
            <strong>{page3.description2} </strong>
            {page3.description3}
          </H1Gradient>
        </Fade>
      </div>
    </Section>

    <Section
      hasNoPaddingTop
      hasDivider={true}
      hasBorder={false}
      hasGradientBorder={false}
    >
      <div className='container has-text-centered'>
        <Fade bottom>
          <H1Spaced
            className='has-text-centered is-3-to-5-rem'
            style={{
              color: 'white'
            }}
          >
            {page4.heading} <span>{page4.empHeading}</span>
          </H1Spaced>
        </Fade>
        <Fade bottom>
          <H3Half
            className='has-text-centered is-hidden-mobile is-size-4-desktop is-size-5-tablet'
            style={{
              color: 'white',
              margin: '0 auto',
              width: '60%'
            }}
          />
        </Fade>
      </div>
    </Section>

    <Section
      hasNoPaddingTop
      hasDivider={false}
      hasBorder={true}
      hasGradientBorder={false}
      hasStyle={{
        backgroundImage: 'url(img/process-bg.png)'
      }}
    >
      <div className='container'>
        <img
          className='image is-hidden-mobile'
          src={'img/process-diagram.png'}
          alt='process-diagram'
        />
        <img
          className='image is-hidden-tablet'
          src={'img/process-diagram-mobile.png'}
          alt='process-diagram'
        />
      </div>
    </Section>

    <Section
      hasNoPaddingTop={true}
      hasDivider={true}
      hasBorder={true}
      hasGradientBorder={false}
    >
      <BackgroundImage />
      <div className='container'>
        <H1Features
          className='has-text-centered is-3-to-5-rem'
          style={{
            color: 'white'
          }}
        >
          {page5.heading} <span>{page5.empHeading}</span>
        </H1Features>
        <Features items={page5.cards} />
      </div>
    </Section>

    <Section hasDivider={false} hasBorder={true} hasGradientBorder={false}>
      <div className='container'>
        <Team
          gridItems={page6.people}
          heading={page6.heading}
          empHeading={page6.empHeading}
        />
      </div>
    </Section>

    <Section
      hasDivider={false}
      hasBorder={true}
      hasGradientBorder={false}
      hasStyle={{
        position: 'relative',
        // opacity: '0.5',
        background:
          'radial-gradient(circle at top left, rgba(52, 42, 54, 0) 0%, rgba(36, 29, 38, 0.69) 32.7%,#161117 100%)'
      }}
    >
      <div className='container'>
        <SubscribeGrid
          heading={page7.heading}
          empHeading={page7.empHeading}
          text={page7.text}
          textTitle={page7.textTitle}
        />
      </div>
    </Section>

    <Section
      hasPaddingTop={false}
      hasDivider={true}
      hasBorder={true}
      hasGradientBorder={false}
    >
      <div className='container'>
        <Partners
          items={page8.partners}
          empHeading={page8.empHeading}
          heading={page8.heading}
        />
      </div>
    </Section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  page1: PropTypes.object,
  page2: PropTypes.object,
  page3: PropTypes.object,
  page4: PropTypes.object,
  page5: PropTypes.object,
  page6: PropTypes.object,
  page7: PropTypes.object,
  page8: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        page1={frontmatter.page1}
        page2={frontmatter.page2}
        page3={frontmatter.page3}
        page4={frontmatter.page4}
        page5={frontmatter.page5}
        page6={frontmatter.page6}
        page7={frontmatter.page7}
        page8={frontmatter.page8}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        page1 {
          heading
          subheading
        }
        page2 {
          heading
          empHeading
          cards {
            image
            text
          }
        }
        page3 {
          description1
          description2
          description3
        }
        page4 {
          heading
          empHeading
          text
        }
        page5 {
          heading
          empHeading
          cards {
            title
            content
          }
        }
        page6 {
          heading
          empHeading
          people {
            image {
              childImageSharp {
                fluid(maxWidth: 250, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            position
          }
        }
        page7 {
          heading
          empHeading
          textTitle
          text
        }
        page8 {
          heading
          empHeading
          partners {
            image {
              childImageSharp {
                fluid(maxWidth: 120, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const H1Gradient = styled.h1`
  background-clip: text !important;
  background-image: -webkit-linear-gradient(to bottom, #7f5692, #dc6e69) !important;
  background-image: linear-gradient(to bottom, #7f5692, #dc6e69) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
`
const H3Half = styled.h3`
  margin: 0 auto;
  width: 90%;
  @media screen and (min-width: 769px) {
    width: 60%;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    width: 30%;
  }
  @media screen and (min-width: 1216px) {
    margin: 0 auto;
    width: 27%;
  }
`
const H1Spaced = styled.h1`
  margin-bottom: 0px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 40px;
  }
`
const H1Features = styled.h1`
  margin-bottom: 40px;
  @media screen and (min-width: 769px) {
    margin-bottom: 80px;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 120px;
  }
  @media screen and (min-width: 1408px) {
    margin-bottom: 200px;
  }
`
