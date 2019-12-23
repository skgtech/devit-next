import React from 'react'

import Menu from './Menu'

const MenuContainer = ({date, ticketsEnabled}) => {
  return (
    <Menu date={date} ticketsEnabled={ticketsEnabled} />
  )
}

export default MenuContainer
