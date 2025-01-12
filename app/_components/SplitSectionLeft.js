import { AppearOnScrollSlideLeft, AppearOnScrollSlideRight } from "./AnimateOnScroll";

const Title = ({content}) => {
  return (
    <div className="title-contain">
      <h2>{content}</h2>
      <hr/>
    </div>
  );
}

const Subtitle = ({subtitle, subsub}) => {
  return (
    <div className="title-contain">
      <h2>{subtitle}</h2>
      {subsub ? <h3>{subsub}</h3> : null}
      <hr/>
    </div>
  );
}

const SplitSectionLeft = ({children, title, subtitle, bkgd_image_src, direction = 'left', subsub = ''}) => {
  return (
    <div className='SplitSectionLeft'>
      { direction == 'left' ? 
      <div className='split-sect-l'>
        { title && 
        <AppearOnScrollSlideRight>
          <Title content={title} />
        </AppearOnScrollSlideRight> }

        <div className='split-side'>
          <div className='split-ov'>
            <div className='split-content' style={{backgroundImage: `url(${bkgd_image_src})`, backgroundSize: 'cover', backgroundPosition: 'top'}}></div>
          </div>
        </div>
        
        <div className='split-main'>
          { subtitle && 
          <AppearOnScrollSlideRight>
            <Subtitle subtitle={subtitle} subsub={subsub} />
          </AppearOnScrollSlideRight> }
          <div className="blurb">
            <AppearOnScrollSlideLeft delay={200}>
              {children}
            </AppearOnScrollSlideLeft>
          </div>
        </div>

        {/* <div className='split-side'> */}
      </div> 
      :
      <div className='split-sect-r'>
        { title && 
        <AppearOnScrollSlideRight>
          <Title content={title} />
        </AppearOnScrollSlideRight> }

        <div className='split-main'>
          { subtitle && 
          <AppearOnScrollSlideRight>
            <Subtitle subtitle={subtitle} subsub={subsub} />
          </AppearOnScrollSlideRight> }
          
          <div className="blurb">
            <AppearOnScrollSlideLeft delay={200}>
              {children}
            </AppearOnScrollSlideLeft>
          </div>
        </div>

        <div className='split-side'>
          <div className='split-ov'>
            <div className='split-content' style={{backgroundImage: `url(${bkgd_image_src})`, backgroundSize: 'cover', backgroundPosition: 'top'}}></div>
          </div>
        </div>
        {/* <div className='split-side'> */}
      </div> }
    </div>
  );
}

export default SplitSectionLeft;