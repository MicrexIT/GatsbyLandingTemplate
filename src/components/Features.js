import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from './Box'
import Accordion from './Accordion'

class Features extends React.Component {
  constructor(props) {
    super(props)
    let items = this.props.items.map((i, index) => {
      let open = false
      if (index === 0) {
        open = true
      }
      return {
        ...i,
        open
      }
    })
    this.state = {
      items
    }
  }

  closeTab = (index) => {
    let items = this.state.items.map((i) => {
      let open = false
       return {
         ...i,
         open
       }
    })
    this.setState({
      items
    })
  }

  closeOtherTabs = (index) => {
     let items = this.state.items.map((i, ind) => {
      let open = false
       if (index === ind) {
         open = true
       }
       return {
         ...i,
         open
       }
    })
    this.setState({
      items
    })
  }

  render() {
    const items = this.state.items
    return (
      <Grid>
        {items.map((item, index) => (
          <>
            <div className='is-hidden-tablet'>
              <Accordion title={item.title} index={index} closeTab={this.closeTab} closeOtherTabs={this.closeOtherTabs} open={item.open} content={item.content} />
            </div>
            <div className='is-hidden-mobile'>
              <Box title={item.title} content={item.content} />
            </div>
          </>
        ))}
      </Grid>
    )
  }
}

Features.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      title: PropTypes.string
    })
  )
}

export default Features

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(80%, 315px);
  /* grid-template-rows: repeat(4, 165px); */
  grid-row-gap: 0px;
  margin: 0 auto;
  justify-content: center;
  /* padding-top: 40px; */
  /* padding-bottom: 40px; */

  @media screen and (min-width: 1024px) {
    /* margin: 109px 200px 131px 200px; */
    grid-column-gap: 100px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 247px);
  }
`
