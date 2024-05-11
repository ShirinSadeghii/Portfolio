import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({links}) => {
  console.log('links', links)
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
            <li key={index}>
            <NavLink href={link.id} title={link.title} />
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay