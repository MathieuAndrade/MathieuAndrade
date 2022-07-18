import React from 'react'
import styles from './projects.module.css'
import Image from 'next/image'

interface CardProps {
    url: string,
    image: string,
    title: string,
    description: string,
}

const Card: React.FunctionComponent<CardProps> = ({url, image, title, description}) => {
    return (
        <li>
            <a href={url} className={styles.card}>
                <Image src={image} alt="" width={300} height={300}  />
                <div className={styles.overlay}>
                    <div className={styles.header}>
                        <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg">
                            <path />
                        </svg>
                        <div className={styles.text}>
                            <h3 className={styles.title}>{title}</h3>
                        </div>
                    </div>
                    <p className={styles.description}>{description}</p>
                </div>
            </a>
        </li>
    )
}

export default Card;
