import React from 'react'

import Hero from './Hero'
import Menu from '../Menu/Menu'

const HeroContainer = ({date, ticketsEnabled}) => {
  return (
    <Hero
      date={date}
      menu={<Menu date={date} ticketsEnabled={ticketsEnabled} />}
    />
  )
}

export default HeroContainer
