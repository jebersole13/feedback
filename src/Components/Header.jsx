import PropTypes from 'prop-types'


function Header({text, bgColor, textColor}) {

  const headerStyles ={
    backgroundColor:bgColor, color:textColor 
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps= {
  text:'Feedback UI Project',
  bgColor:'rgba(0,0,0,0.4)',
  textColor:'#ff6a9f',
}

Header.prototype={
  text:PropTypes.string,
  bgColor: PropTypes.string,
  
}

export default Header

