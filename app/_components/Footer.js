"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from './Header';
import LinkedinSVG from '../_svg/LinkedinSVG';
import EmailSVG from '../_svg/EmailSVG';
import WFLogoSVG from '../_svg/WFLogoSVG';

export default function Footer() {
  return (
    <footer className="Footer">
      <Header active={false} main={false}/>

      <div className='under-h'>
        <p className='h-blurb'>A Texas-based investment firm that partners with founder/family-owned businesses to help them accelerate growth.</p>
        {/* <hr/> */}
        <p className='h-blurb'>Stewardship. Integrity. Grit. Family Values.</p>
        <div className='socials'>
          <p>Get in touch with us!</p>
          <a href={'https://www.linkedin.com/company/winterfordcapital/?viewAsMember=true'} target='_blank'><LinkedinSVG color={'#ffffff'} /></a>
          <a href={'mailto:amritbedi@winterfordcapital.com,Charles@winterfordcapital.com'}><EmailSVG color={'#ffffff'} /></a>
        </div>
      </div>
      <div className='wf'>
        {/* <WFLogoSVG /> */}
      </div>
      <p className='cp'>© 2025 Winterford Capital, LLC. All Rights Reserved.</p>
    </footer>
  );
}
