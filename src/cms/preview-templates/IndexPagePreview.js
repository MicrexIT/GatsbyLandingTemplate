import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        page1={data.page1}
        page2={data.page2}
        page3={data.page3}
        page4={data.page4}
        page5={data.page5}
        page6={data.page6}
        page7={data.page7}
        page8={data.page8}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
