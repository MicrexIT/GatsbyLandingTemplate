import React from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
const LogosCarousel = () => {
  return (
    <Div
    >
    <div className='has-text-centered columns is-multiline is-centered'>
      <div className='column is-full has-text-centered'>
        {/* <p>AS SEEN IN</p> */}
        <CenteredDiv>
          <img
            src='img/PR-title.svg'
            alt='AS SEEN IN'
            style={{ width: '115px', margin: '0 auto', objectFit: 'cover' }}
          />
        </CenteredDiv>
      </div>

      <div className='column is-mobile is-three-quarters'>
        {/* <Carousel defaultWait={1000} */}
        <Carousel autoplay={true} autoplayInterval={3000} withoutControls={true}>
          <div className='columns is-mobile is-centered is-vcentered is-multiline'>
            <div className='column is-one-third-mobile is-one-fifth-tablet'>
              <a
                href='https://www.forbes.com/sites/nelsongranados/2018/12/03/how-blockchain-is-making-waves-in-media-and-entertainment/?fbclid=IwAR2DHNJyRfsRsf8-WDQpkET37Ia7-A6S-QKfZAz-BMTEEr_6VIPkVgnJlpY#1803c44c3f6c'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='forbes hero-footer--icon'>
                  <img src={'img/forbes.svg'} alt='Forbes' />
                </span>
              </a>
            </div>
            <div className='column is-one-third-mobile is-one-fifth-tablet'>
              <a
                href='https://www.cineuropa.org/en/newsdetail/367827/?fbclid=IwAR18IeYVbb9UHnzU3-yELNIybguiQexRGto8puxDpfF5aazRdwEeBaeMfpQ'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='cineuropa hero-footer--icon'>
                  <img src={'img/cineuropa.svg'} alt='Cineuropa' />
                </span>
              </a>
            </div>
            <div className='column is-one-third-mobile is-one-fifth-tablet'>
              <a
                href='https://www.screendaily.com/features/will-blockchain-become-a-game-changer-for-the-film-industry/5129044.article'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='screendaily hero-footer--icon'>
                  <img src={'img/screen-daily.svg'} alt='SCREENDAILY' />
                </span>
              </a>
            </div>

            <div className='column is-one-third-mobile is-one-fifth-tablet'>
              <a
                href='https://feedmagazine.tv/index.php/start-up-alley/start-up-big-couch-united-kingdom-2014/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='feed hero-footer--icon'>
                  <img src={'img/feed.png'} alt='FEED' />
                </span>
              </a>
            </div>

            <div className='column is-one-third-mobile is-one-fifth-tablet'>
              <a
                href='https://nofilmschool.com/2018/02/why-blockchain-will-change-how-business-done-film-industry'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='nofilmschool hero-footer--icon'>
                  <img src={'img/no-film-school.png'} alt='nofilmschool' />
                </span>
              </a>
            </div>
          </div>

          <div className='columns is-mobile is-centered is-vcentered is-multiline'>
            <div className='column is-one-third-mobile is-one-fifth-tablet'>
              <a
                href='https://www.hollywoodreporter.com/news/berlin-german-producers-join-tech-start-ups-new-cinema-solutions-1085821'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='forbes hero-footer--icon'>
                  <img src={'img/hollywood-reporter.svg'} alt='Forbes' />
                </span>
              </a>
            </div>
            <div className='column is-one-third-mobile is-one-fifth-tablet'>
              <a
                href='https://www.ibc.org/tech-advances/putting-blockchain-to-work-in-media/3136.article'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='cineuropa hero-footer--icon'>
                  <img src={'img/ibc-logo.svg'} alt='Cineuropa' />
                </span>
              </a>
            </div>
            <div className='column is-one-third-mobile is-one-fifth-tablet'>
              <a
                href='https://www.asiatimes.com/2018/05/article/at-this-years-cannes-the-buzzword-is-blockchain/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='screendaily hero-footer--icon'>
                  <img src={'img/atimes.png'} alt='SCREENDAILY' />
                </span>
              </a>
            </div>

            <div className='column is-one-third-mobile is-one-fifth-tablet'>
              <a
                href='https://www.techworld.com/picture-gallery/startups/blockchain-startups-watch-3669058/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='feed hero-footer--icon'>
                  <img src={'img/tech-world.svg'} alt='TechWorld' />
                </span>
              </a>
            </div>

            <div className='column is-one-third-mobile is-one-fifth-tablet'>
              <a
                href='https://variety.com/2018/film/festivals/transilvania-tech-trends-1202819565/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='nofilmschool hero-footer--icon'>
                  <img src={'img/variety.svg'} alt='nofilmschool' />
                </span>
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
    </Div>
  );
}

export default LogosCarousel;

const Div = styled.section`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* justify-content: space-between; */
  background-color: #110D12;
  padding-top: 40px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 80px;
  @media screen and (min-width: 769px) {
    padding-top: 80px;
    padding-bottom: 80px;
    padding-right: 20px;
    padding-left: 20px;
  }

`
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`
