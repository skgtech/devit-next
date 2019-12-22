import React from 'react'
import { Grid } from 'react-flexbox-grid'
import PropTypes from 'prop-types'

import Block from './Block'
import { LightBlockHeading } from './BlockHeading'

import thess from './../public/new/thessaloniki.jpg'

const Plan = ({ sizes }) => {
  return (
    <Block
      css={{
        paddingTop: '11.5em',
        paddingBottom: '11.5em',
        position: 'relative',
      }}
    >
      <img
        src={thess}
        css={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <Grid>
        <LightBlockHeading>Plan your stay at Thessaloniki</LightBlockHeading>
        <p>
          Lonely Planet has described Thessaloniki as “easy to fall in love with – it has beauty,
          chaos, history and culture, a remarkable cuisine and wonderful, vast sea views.” Discover
          hotel options, attractions, things to do and combine your visit with a memorable
          experience.
        </p>
        <a href="/explore-thessaloniki" className="block__more-cta">
          Find out more
          <i className="fas fa-long-arrow-alt-right" />
        </a>
      </Grid>
    </Block>
  )
}

Plan.propTypes = {
  sizes: PropTypes.object,
}

export default Plan
