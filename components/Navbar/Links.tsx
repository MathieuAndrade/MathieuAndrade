import React from 'react'
import styles from './navbar.module.css'
import { Icon } from '@iconify/react'

const Links: React.FunctionComponent = () => (
    <>
        <a href={'#home'} className={styles.link}>
            <Icon icon='eva:home-outline' />
            Home
        </a>
        <a href={'#about'} className={styles.link}>
            <Icon icon='eva:person-outline' />
            About
        </a>
        <a href={'#projects'} className={styles.link}>
            <Icon icon='eva:pantone-outline' />
            Projects
        </a>
        <a href={'/resume'} className={styles.link}>
            <Icon icon='eva:file-text-outline' />
            Resume
        </a>
    </>
)

export default Links;
