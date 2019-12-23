import React from 'react'
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Speakers from '../components/Speakers'
import Header from '../components/Header'

const AllSpeakers = ({speakers, dateString, ticketsEnabled}) => {
  return (
    <Layout title={`Speakers`} description={'All DEVit speakers'}>
      <Header dateString={dateString} ticketsEnabled={ticketsEnabled}/>
      <Speakers speakers={speakers}/>
      <Footer />
    </Layout>
  )
}


AllSpeakers.getInitialProps = async function() {
  const res = await fetch('http://localhost:1337/speakers');
  const data = await res.json();

  const versionRes = await fetch('http://localhost:1337/versions?enabled=true');
  const versionData = await versionRes.json();

  let dateString;
  if (versionData.length) {
    dateString = `${format(new Date(versionData[0].talksDay), 'd MMM')} - ${format(new Date(versionData[0].workshopsDay), 'd MMM')}, ${format(new Date(versionData[0].talksDay), 'yyyy')}`;
  }

  return {
    dateString,
    ticketsEnabled: data.length ? data[0].openTickets : false,
    speakers: data.map(speaker => ({
      ...speaker,
      img: `http://localhost:1337${speaker.image.url}`
    }))
  };
};

export default AllSpeakers
