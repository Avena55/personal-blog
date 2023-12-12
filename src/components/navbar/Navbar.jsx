"use client"

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const links = [
    {
        id: 1,
        title: 'Home',
        url: "/",
    },
    {
        id: 2,
        title: 'Portfolio',
        url: "/portfolio",
    },
    {
        id: 3,
        title: 'About',
        url: "/about",
    },
    {
        id: 4,
        title: 'Contact',
        url: "/contact",
    },
    {
        id: 5,
        title: 'Dashboard',
        url: "/dashboard",
    },
]

function Navbar() {
  return (
    <div className={styles.container}>
        <Link href='/' className={styles.logo}>avenavici.</Link>
        <div className={styles.links}>
            {links.map(link => (
                <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
            ))}
            <button className={styles.logout} onClick={() => {console.log('logout')} }>Logout</button>
        </div>
    </div>
  )
}

export default Navbar