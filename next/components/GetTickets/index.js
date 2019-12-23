import React from 'react'

import GetTickets from './GetTickets'

const GetTicketsContainer = ({ticketsEnabled}) => {
  return (
    <GetTickets ticketsEnabled={ticketsEnabled} />
  )
}

export default GetTicketsContainer
