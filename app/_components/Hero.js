

const Hero = ({image_src, title, blurb, size}) => {
  return (
    <div className={`Hero ${size == 'sm' ? 'sm': ''}`} style={{backgroundImage: `url(${image_src})`}}>
      <div className='hero-overlay'>
        <div className='hero-content'>
          <div id="hero-values">
            {title}
            <div className={`border ${size == 'sm' ? 'sm': ''}`}></div>
          </div>
          <div id="hero-desc">{blurb}</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;