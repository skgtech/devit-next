import React from 'react'
import { Grid } from 'react-flexbox-grid'
import fetch from 'isomorphic-unfetch';

import Header from '../components/Header'
import Block from '../components/Block'
import { DarkBlockHeading } from '../components/BlockHeading'
import CallForPapers from '../components/CallForPapers'
import Session from '../components/Session'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Layout from '../components/Layout'

const WorkshkopsPage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout>
            <Header />
            <Grid>
              <Block>
                <DarkBlockHeading>Workshops</DarkBlockHeading>
                <p>
                  The 9th of June will be a day dedicated on workshops. View all our sessions below
                  along with their respective instructors and join us for a full day of hands-on
                  experience.
                </p>
              </Block>
              <Block>
                {data.workshops.edges.map(({ node }, index) => (
                  <Session key={index} session={node} />
                ))}
              </Block>
            </Grid>
            <CallForPapers />
            <Subscribe />
            <Footer />
          </Layout>
        )
      }}
    />
  )
}

export default WorkshkopsPage

WorkshkopsPage.getInitialProps = async function() {
  const res = await fetch('http://localhost:1337/talks?type=workshop');
  const data = await res.json();

  return {
    talks: data
  };
};
