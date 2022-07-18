import React, { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import styles from './navbar.module.css'
import useScroll from '../../utils/scroll'
import Links from './Links'

const Navbar: React.FunctionComponent = () => {
    const [stickyMode, updateStickyMode] = useState(false)
    const [collapsed, updateCollapsed] = useState(false)

    useScroll(() => {
        if (window.scrollY >= 20) {
            updateStickyMode(true)
        } else {
            updateStickyMode(false)
        }
    })

    return (
        <nav className={`${styles.navbar} ${stickyMode && styles.sticky}`}>
            <div id='navbar-nav' className={styles.container}>
                <a href={'/'} className={styles.brand}>
                    <Image src='/logo.svg' alt='' width='80' height='40' />
                </a>
                <div className={styles.desktop}>
                    <Links/>
                </div>
                <button
                    aria-controls='navbar-nav'
                    type='button'
                    aria-label='Toggle navigation'
                    className={styles.toggler}
                    onClick={() => updateCollapsed(true)}>
                    <Icon icon='eva:menu-2-fill' />
                </button>
                <div className={`${styles.mobile} ${collapsed && styles.open}`}>
                    <div className={`${styles.container} w-full px-8 py-2`}>
                        <a href={'/'} className={styles.brand}>LOGO</a>
                        <button
                            aria-controls='navbar-nav'
                            type='button'
                            aria-label='Toggle navigation'
                            className={styles.toggler}
                            onClick={() => updateCollapsed(!collapsed)}>
                            <Icon icon='eva:close-fill' />
                        </button>
                    </div>
                    <Links/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
