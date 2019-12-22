import React from 'react'

import Hero from './Hero'
import Menu from '../Menu/Menu'

const HeroContainer = () => {
  const date = 'JUNE'
  const tickets = {
    enabled: true,
    url: 'url link',
  };

  return (
    <Hero
      date={date}
      menu={<Menu date={date} tickets={tickets} />}
    />
  )
}

export default HeroContainer
