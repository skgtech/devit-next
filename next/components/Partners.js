import React from 'react'
import { Grid } from 'react-flexbox-grid'

import Stack from './Stack'
import Block from './Block'
import { DarkBlockHeading } from './BlockHeading'

const Partners = ({partners, weSupport}) => {
  return (
    <div>
      <Block
        css={{
          backgroundColor: '#fff',
        }}
      >
        <Grid>
          <DarkBlockHeading>Our partners</DarkBlockHeading>
          <p>
            We are lucky to have partnered with a lot of organizations across Thessaloniki. We
            want to thank them for helping us with DEVit every year.
          </p>
          <Stack
            css={{
              marginTop: '72px',
            }}
            list={partners}
          />
        </Grid>
      </Block>
      <Block
        css={{
          backgroundColor: '#f5f8fa',
        }}
      >
        <Grid>
          <DarkBlockHeading>We proudly support</DarkBlockHeading>
          <Stack
            css={{
              marginTop: '72px',
            }}
            list={weSupport}
          />
        </Grid>
      </Block>
    </div>
  )
}

export default Partners
