// "use client"
import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

// interface Types {
//     LinkText: string,
//     LinkTo: string,
// }

const NavLinks = [
    {
        LinkText: "Home",
        LinkHref: "",
    }, {
        LinkText: "Fixtures",
        LinkHref: "",
    }, {
        LinkText: "Teams",
        LinkHref: "",
    }, {
        LinkText: "News",
        LinkHref: "",
    }, {
        LinkText: "Standings",
        LinkHref: "",
    }, {
        LinkText: "Players",
        LinkHref: "",
    }, {
        LinkText: "Highlights",
        LinkHref: "",
    }, {
        LinkText: "Gallery",
        LinkHref: "",
    }, {
        LinkText: "About Us",
        LinkHref: "",
    }, {
        LinkText: "Contact",
        LinkHref: "",
    },
]

const Navbar: React.FC = () => {
    return (
        <nav className={styles.NavbarMain}>
            <Link href={"/"} target="_blank">
                <img src="/assets/Logo.png" alt="" />
            </Link>

            <div className={styles.Navbar}>
                {
                    NavLinks.map(({ LinkHref, LinkText }, index) => (
                        <div className={styles.NavLink} key={index}>
                            <Link href={LinkHref}>{LinkText}</Link>
                        </div>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar
