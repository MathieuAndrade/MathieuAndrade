import React from 'react'
import Image from 'next/image'
import styles from './Home.module.css'

//TODO: text animation

const Home: React.FunctionComponent = () => {
    return (
        <section id='home' className={`w-full mt-24 ${styles.home}`}>
            <div className={styles.header}>
                <h1>Hello, I&apos;m Mathieu Andrade</h1>
                <p>Freelance developer who loves creating websites and interfaces</p>
                <button className='btn btn-primary-gradient w-full max-w-2xs'>Hire me</button>
            </div>
            <div>
                <Image src='/images/home.png' alt='' width='300' height='300' />
            </div>
        </section>
    )
}

export default Home
