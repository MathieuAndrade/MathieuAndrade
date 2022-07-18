import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

const Contact: React.FunctionComponent = () => {
    return (
        <section id='contact' className='w-full text-center mt-24 flex content-center'>
            <div className={styles.container}>
                <div>
                    <h3>Have a question or want to work together?</h3>
                    <a
                        href='mailto:mathieu.andrade@hotmail.com'
                        target='_blank'
                        className='btn btn-primary-gradient w-full max-w-2xs'
                        rel='noreferrer'>
                        Contact
                    </a>
                </div>
                <div>
                    <Image src='/images/contact.png' alt='' width='250' height='250' />
                </div>
            </div>
        </section>
    )
}

export default Contact
