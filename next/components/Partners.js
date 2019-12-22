import React from 'react'
import { Grid } from 'react-flexbox-grid'
import { StaticQuery, graphql } from 'gatsby'

import Stack from './Stack'
import Block from './Block'
import { DarkBlockHeading } from './BlockHeading'

const Partners = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          partners: allPartner {
            edges {
              node {
                name
                url
                override_height
                img {
                  publicURL
                  childImageSharp {
                    sizes(maxWidth: 500) {
                      ...GatsbyImageSharpSizes_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
          weSupport: allWeSupport {
            edges {
              node {
                name
                url
                override_height
                img {
                  publicURL
                  childImageSharp {
                    sizes(maxWidth: 500) {
                      ...GatsbyImageSharpSizes_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
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
                list={data.partners.edges.map(node => node.node)}
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
                list={data.weSupport.edges.map(node => node.node)}
              />
            </Grid>
          </Block>
        </div>
      )}
    />
  )
}

export default Partners
