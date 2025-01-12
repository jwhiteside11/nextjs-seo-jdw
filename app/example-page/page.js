"use client";

import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Hero from '../_components/Hero';
import hero from '../_images/cnc-gas-cutting-metal-sheet.jpg';
import person from '../_images/mountain.jpg';
import FullWidthTextElem from '../_components/FullWidthTextElem';
import SplitSectionLeft from '../_components/SplitSectionLeft';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default function ExamplePage() {
  return (
    <div className='ExamplePage'>
      <Header active={true}/>

      <Hero image_src={hero.src} title={'Example Page'} blurb={''} size={'sm'} />

      <FullWidthTextElem>
        <p>{lorem}</p>
        <p>{lorem}</p>
      </FullWidthTextElem>

      <SplitSectionLeft subtitle={"Joe Amazing"} subsub="Founder/CEO" bkgd_image_src={person.src}>
        <p>{lorem}</p>
        <p>{lorem}</p>
      </SplitSectionLeft>

      <Footer />
    </div>
  );
}