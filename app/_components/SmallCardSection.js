import { AppearOnScrollSlideLeft, AppearOnScrollSlideRight } from "./AnimateOnScroll";


const SmallCardSection = ({children, title, top_blurb, bot_blurb}) => {
  return (
    <div className='SmallCardSection'>
      <div className='sm-card-section-inner'>
        { title && 
        <AppearOnScrollSlideRight>
          <div className="title-contain">
            <h2>{title}</h2>
            <hr/>
          </div>
        </AppearOnScrollSlideRight> }

        { top_blurb && 
        <AppearOnScrollSlideLeft delay={200}>
          <div className="tb">
            {top_blurb}
          </div>
        </AppearOnScrollSlideLeft> }

        <div className='card-contain'>
          {children}
        </div>

        <div className='bot-bar'>{bot_blurb}</div>
      </div>
    </div>
  );
}

export default SmallCardSection;