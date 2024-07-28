import React from 'react';
import Header from './Header';
import Navbar from './Nav';
import Hero from './Hero';
import BelowHero from './BelowHero';
import YouTubeEmbed from './YouTubeEmbed';
import ToingggFeatures from './ToingggFeatures';
import Response from './Response';
import Response1 from './Response1';
import Safety from './Safety';
import FAQ from './FAQ';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <BelowHero />
      <div className='flex justify-center items-center py-8'>
        <div className="w-full max-w-5xl">
          <YouTubeEmbed embedId="_La3wQlntgw" />
        </div>
      </div>
      <ToingggFeatures />
      <Response/>
      <Response1/>
      <Safety/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default HomePage;
