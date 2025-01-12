

const LargeCardSection = ({children, title}) => {
  return (
    <div className='LargeCardSection'>
      { title && 
      <div className="lg-title"><h2>{title}</h2><hr/></div> }
      <div className='lg-card-section-content'>
        {children}
      </div>
    </div>
  )
}

export default LargeCardSection;