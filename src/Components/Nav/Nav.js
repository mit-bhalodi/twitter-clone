import React from 'react'
import NavItem from './NavItem/NavItem'

export default function Nav() {
  return (
    <div>
        <NavItem icon="home" title="Home" />
        <NavItem icon="tag" title="Explore" />
        <NavItem icon="notifications" title="Notifications" />
        <NavItem icon="mail" title="Messages" />
        <NavItem icon="bookmark" title="Bookmark" />
        <NavItem icon="list" title="List" />
        <NavItem icon="person" title="Profile" />
        <NavItem icon="more_horiz" title="More" />
    </div>
  )
}
