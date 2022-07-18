import React from 'react'
import { Icon } from '@iconify/react'
import styles from './Footer.module.css'

const Footer: React.FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <div className={'text-center px-4'}>
                    <span>Designed and Developed by Mathieu Andrade</span>
                </div>
                <div className={'text-center px-4'}>
                    <span>Copyright © 2022 Mathieu Andrade</span>
                </div>
                <div className={'text-center px-4'}>
                    <ul className={styles.social}>
                        <li>
                            <a href='https://github.com/mathieuandrade' target='_blank' rel='noreferrer'>
                                <Icon icon='eva:github-fill' />
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/mathieuandrade' target='_blank' rel='noreferrer'
                               className={'mx-4'}>
                                <Icon icon='eva:twitter-fill' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/mathieu-andrade-b9863520a/' target='_blank'
                               rel='noreferrer'>
                                <Icon icon='eva:linkedin-fill' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
