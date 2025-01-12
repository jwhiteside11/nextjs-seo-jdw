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
    <SmallCardSection title={'Our Approach'} top_blurb={<p>{lorem}</p>} bot_blurb={<Link href="approach"><p>Please click here to learn more.</p><div className='underrule'></div></Link>}>

      <SmallCard title={'Size'} titleCenter>
        <ul>
          <li>Revenues: $5-$100 M</li>
          <li>EBITDA: $1-$10 M</li>
          <li>Investment check: $5-$100 M</li>
        </ul>
      </SmallCard>

      <SmallCard title={'Structure'} titleCenter>
        <ul>
          <li>Majority recapitalizations</li>
          <li>Closely held businesses seeking first time institutional capital</li>
        </ul>
      </SmallCard>

      <SmallCard title={'Focus Areas'} titleCenter>
        <ul>
          <li>Manufacturing</li>
          <li>Value-added distribution</li>
          <li>B2B services</li>
        </ul>
      </SmallCard>

      <SmallCard title={'Investment Attributes'} titleCenter>
        <ul>
          <li>Reoccurring Demand Profile</li>
          <li>High Customer Retention</li>
          <li>Proven Management Team</li>
          <li>Fragmented Markets</li>
        </ul>
      </SmallCard>
    </SmallCardSection>
    );
}

const BankerOwnerCards = () => {
  return (
    <LargeCardSection>

      <AppearOnScrollSlideUp>
        <LargeCard title={"For Bankers"} btn_link={"/for-bankers"}>
          <p>We bring patient capital combined with significant investing and operating experience to invest in family/founder-owned companies. Our experiences, resources, and relationships within the industrial sector allows us to be focused and complete transactions with speed and certainty.</p>
        </LargeCard>
      </AppearOnScrollSlideUp>

      <AppearOnScrollSlideUp>
        <LargeCard title={"For Owners"} btn_link={"/for-owners"}>
          <p>We are operationally-focused partners committed to adding long-term value to the business you have built. We create collaborative partnerships with management teams, support in accelerating growth, and nurture employees by providing them meaningful incentives.</p>
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
