import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar/Navbar'
import Home from '../components/V2/Home/Home'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

/*
https://mattfarley.ca
https://technext.github.io/satner/index.html
http://www.razvangarofeanu.com/#the-g
https://www.codewonders.dev
https://anuraghazra.dev
https://codersblock.com
https://monicalent.com
https://jhey.dev
 */

const MainPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Mathieu Andrade - Web Developer</title>
                <meta name='description'
                      content='Mathieu Andrade - Web Developer based in France. Skilled in build websites and mobile app.' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />

            <main className={"max-w-6xl mx-auto"}>
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </>
    )
}

export default MainPage
