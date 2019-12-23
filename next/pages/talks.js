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

const TalksPage = () => {
  return (
    <Layout>
      <Header />
      <Grid>
        <Block>
          <DarkBlockHeading>Talks</DarkBlockHeading>
          <p>
            Our main event will took place on 10th of June. This is a list of and the talks
            you will have the opportunity to watch to and all the great speakers you will
            meat. The Talks day is the heart of the DEVit conference and each year we strive
            to make it better. Join us.
          </p>
        </Block>
        <Block>
          {talks.map((talk, index) => (
            <Session key={index} session={talk} />
          ))}
        </Block>
      </Grid>
      <CallForPapers />
      <Subscribe />
      <Footer />
    </Layout>
  )
}

export default TalksPage

TalksPage.getInitialProps = async function() {
  const res = await fetch('http://localhost:1337/talks?type=talk');
  const data = await res.json();

  return {
    talks: data
  };
};
