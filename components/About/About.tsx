import React from 'react'
import Image from 'next/image'
import styles from './About.module.css'

const About: React.FunctionComponent = () => {
    return (
        <section id='about' className="w-full mt-24 text-center">
            <h1>About</h1>
            <div className={styles.about}>
                <div className={'col-md-5'}>
                    <Image src='/images/home.png' alt='' width='250' height='250' />
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                        ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus.
                    </p>
                </div>
                <div>
                    lorem ipsum
                </div>
            </div>
        </section>
    )
}

export default About
