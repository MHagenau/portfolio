import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

const Home: NextPage = () => {
  return (
    <div className='bg-[#2E3138] text-white h-screen snap-y snap-proximity overflow-scroll z-0
                    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE787]/80'>
      <Head>
        <title>Morten Hagenau</title>
        <link rel="shortcut icon" href="/Miscellaneous/avatar.png" />
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      <section id="publications" className="snap-start">
        <Publications />
      </section>


      <section id="contact" className='snap-start'>
        <Contact />
      </section>

      
    </div>
  );
};

export default Home