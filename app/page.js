"use client";

import Link from 'next/link';
import Header from './_components/Header';
import hero from './_images/gears.jpg';
import mountain from './_images/mountain.jpg';
import Footer from './_components/Footer';
import FullWidthTextElem from './_components/FullWidthTextElem';
import LargeCard from './_components/LargeCard';
import Hero from './_components/Hero';
import SmallCard from './_components/SmallCard';
import SmallCardSection from './_components/SmallCardSection';
import LargeCardSection from './_components/LargeCardSection';
import { AppearOnScrollSlideUp } from './_components/AnimateOnScroll';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const loremSM = 'Lorem ipsum dolor sit amet...';

const WhoWeAre = () => {
  return (
    <FullWidthTextElem title="Who We Are">
      <p>{lorem}</p>
      <p>{lorem}</p>
    </FullWidthTextElem>
  );
}

const InvestmentApproach = () => {
  return (
    <SmallCardSection title={'Our Approach'} top_blurb={<p>{lorem}</p>} bot_blurb={<Link href="/example-page"><p>Please click here to learn more.</p><div className='underrule'></div></Link>}>

      <SmallCard title={'Small Card 1'} titleCenter>
        <ul>
          <li>{loremSM}</li>
          <li>{loremSM}</li>
          <li>{loremSM}</li>
        </ul>
      </SmallCard>

      <SmallCard title={'SM Card 2'} titleCenter>
        <ul>
          <li>{loremSM}</li>
          <li>{loremSM}</li>
        </ul>
      </SmallCard>

      <SmallCard title={'SC3'} titleCenter>
        <ul>
          <li>{loremSM}</li>
          <li>{loremSM}</li>
          <li>{loremSM}</li>
        </ul>
      </SmallCard>

      <SmallCard title={'Small Card #4'} titleCenter>
        <ul>
          <li>{loremSM}</li>
          <li>{loremSM}</li>
          <li>{loremSM}</li>
          <li>{loremSM}</li>
        </ul>
      </SmallCard>
    </SmallCardSection>
    );
}

const BankerOwnerCards = () => {
  return (
    <LargeCardSection>

      <AppearOnScrollSlideUp>
        <LargeCard title={"Big card #1"} btn_link={"/example-page"}>
          <p>{lorem}</p>
        </LargeCard>
      </AppearOnScrollSlideUp>

      <AppearOnScrollSlideUp>
        <LargeCard title={"Big card #2"} btn_link={"/example-page"}>
          <p>{lorem}</p>
        </LargeCard>
      </AppearOnScrollSlideUp>

    </LargeCardSection>
  )
}

export default function Home() {

  return (
    <div className="Home">
      <Header active={true} />
      
      <Hero image_src={hero.src} title={<><span>Your. </span><span>Title. </span><span>Goes. </span><span>Here. </span></>} blurb={"This bottom blurb can include a brief description."} />

      <BankerOwnerCards />

      <WhoWeAre />

      <InvestmentApproach />

      <Footer />
    </div>
  );
}
