"use client";

import Header from './Header';
import LinkedinSVG from '../_svg/LinkedinSVG';
import EmailSVG from '../_svg/EmailSVG';

export default function Footer() {
  return (
    <footer className="Footer">
      <Header active={false} main={false}/>

      <div className='under-h'>
        <p className='h-blurb'>{process.env.APP_DESC}</p>
        {/* <hr/> */}
        <p className='h-blurb'>Another little blurb.</p>
        <div className='socials'>
          <p>Get in touch with us!</p>
          <a href={'<insert linkedin link here>'} target='_blank'><LinkedinSVG color={'#ffffff'} /></a>
          <a href={'mailto:<insert email here>'}><EmailSVG color={'#ffffff'} /></a>
        </div>
      </div>
      <div className='wf'>
        {/* <WFLogoSVG /> */}
      </div>
      <p className='cp'>© 2025 Example Inc. All Rights Reserved.</p>
    </footer>
  );
}
