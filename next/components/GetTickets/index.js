import React from 'react'

import GetTickets from './GetTickets'

const GetTicketsContainer = () => {
  const tickets = {
    enabled: true,
    url: 'url link',
  };
  return (
    <GetTickets enabled={tickets.enabled} url={tickets.url} />
  )
}

export default GetTicketsContainer
