import React from 'react'
import styles from './projects.module.css'
import Card from './Card'

//TODO: Build list dynamically
const projects = [{
    id:'c0d62927',
    url: '',
    image: 'https://picsum.photos/300',
    title: 'Gladys',
    description: 'Lorem ipsum dolor sit amet consectetur',
}, {
    id:'62dffd41',
    url: '',
    image: 'https://picsum.photos/300',
    title: 'Friday',
    description: 'Lorem ipsum dolor sit amet consectetur',
}, {
    id:'6554fsgf',
    url: '',
    image: 'https://picsum.photos/300',
    title: 'Friday',
    description: 'Lorem ipsum dolor sit amet consectetur',
}]

const Projects: React.FunctionComponent = () => {
    return (
        <section id='projects' className='w-full text-center mt-24'>
            <h1 className={'mb-12'}>Projects</h1>
            <ul className={styles.grid}>
                {projects.map((project) =>
                    <Card
                        key={project.id}
                        url={project.url}
                        image={project.image}
                        title={project.title}
                        description={project.description} />
                )}
            </ul>
        </section>
    )
}

export default Projects
