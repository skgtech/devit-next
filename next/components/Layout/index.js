import React from 'react'
import PropTypes from 'prop-types'

import Layout from './Layout';

const LayoutContainer = ({ title, description, image, children }) => {
  const titlePostfix = " - DEVit Conference"
  const defaultTitle = "JUN 10-11, 2018, Thessaloniki"
  const defaultDescription = "Find out the latest trends and techniques for Frontend, Backend, DevOps and Mobile! Meet all the cool people! We are 360° and proud of it!"
  const defaultImage = "devit-og-general.jpg?1524042961"

  const pageTitle = `${title ? title : defaultTitle} ${titlePostfix}`
  const pageDescription = description ? description : defaultDescription
  const pageImage = image ? image : defaultImage

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription} pageImage={pageImage}>{children}</Layout>
  )
}

LayoutContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.array,
}

export default LayoutContainer
