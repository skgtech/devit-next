import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch';
import {format} from 'date-fns';

import Hero from '../components/Hero'
import GetTickets from '../components/GetTickets'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Speakers from '../components/Speakers'
import Venues from '../components/Venues'
import CallForPapers from '../components/CallForPapers/CallForPapers'
import CallForSponsors from '../components/CallForSponsors/CallForSponsors'
import Plan from '../components/Plan'
import Sponsors from '../components/Sponsors'
// import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Layout from '../components/Layout'

const LandingPageTemplate = ({ talksDay, workshopsDay, callForSponsors, callForPapersSpeaker, openCallForPapers, openCallForSponsors, speakers, sponsors, open, openTickets }) => {
  const dateString = `${format(new Date(talksDay), 'd MMM')} - ${format(new Date(workshopsDay), 'd MMM')}, ${format(new Date(talksDay), 'yyyy')}`;
  return (
    <Layout>
      <Hero open={open} ticketsEnabled={openTickets} date={dateString} />
      <GetTickets ticketsEnabled={openTickets}/>
      <About />
      <Testimonials />
      {open && speakers.length && <Speakers speakers={speakers} />}
      {open && openCallForPapers && <CallForPapers speaker={callForPapersSpeaker}/>}
      {open && openCallForSponsors && <CallForSponsors sponsors={callForSponsors}/> }
      {open && openTickets && <Venues />}
      {open && openTickets && <Plan />}
      {sponsors.legth && <Sponsors sponsors={sponsors}/>}
      {/* <Partners /> */}
      <Subscribe />
      <Footer />
    </Layout>
  )
}

LandingPageTemplate.propTypes = {
  data: PropTypes.object,
}

LandingPageTemplate.getInitialProps = async function() {
  const res = await fetch('http://localhost:1337/versions?_sort=year:desc');
  const data = await res.json();

  let version = data.find(v => v.open === true);
  if (!version) {
    version = data[0];
  }

  let callForPapersSpeaker;
  const callForPapersSpeakerResponse = await fetch('http://localhost:1337/speakers?slug=tim_perry');
  const callForPapersSpeakerData = await callForPapersSpeakerResponse.json();
  callForPapersSpeaker = callForPapersSpeakerData[0];
  
  let callForSponsors = [];
  if (version.openCallForSponsors) {
    const res = await fetch('http://localhost:1337/sponsors?featured=true');
    const data = await res.json();
    callForSponsors = data;
  }

  return {
    ...version,
    callForPapersSpeaker: {...callForPapersSpeaker, img: `http://localhost:1337${callForPapersSpeaker.image.url}` },
    callForSponsors: callForSponsors.map(sponsor => ({
      ...sponsor,
      link: sponsor.url,
      img: `http://localhost:1337${sponsor.image.url}`
    })),
    sponsors: version.sponsors.map(sponsor => ({
      ...sponsor,
      link: sponsor.url,
      img: `http://localhost:1337${sponsor.image.url}`
    })),
    speakers: version.speakers.map(speaker => ({
      ...speaker,
      img: `http://localhost:1337${speaker.image.url}`
    }))
  };
};

export default LandingPageTemplate
