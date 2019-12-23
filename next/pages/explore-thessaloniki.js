import React from 'react'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Destinations from '../components/Destinations'
import Header from '../components/Header'

const Explore = ({dateString, ticketsEnabled}) => {
  return (
    <Layout title={`Thessaloniki`} description={'Plan your stay in Thessaloniki'}>
      <Header dateString={dateString} ticketsEnabled={ticketsEnabled}/>
      <Destinations />
      <Footer />
    </Layout>
  )
}

Explore.getInitialProps = async function() {
  const res = await fetch('http://localhost:1337/versions?enabled=true');
  const data = await res.json();

  let dateString;
  if (data.length) {
    dateString = `${format(new Date(data[0].talksDay), 'd MMM')} - ${format(new Date(data[0].workshopsDay), 'd MMM')}, ${format(new Date(data[0].talksDay), 'yyyy')}`;
  }


  return {
    dateString,
    ticketsEnabled: data.length ? data[0].openTickets : false
  };
};

export default Explore
