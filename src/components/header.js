import React from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require('../images/logo.png')} width="100px" />
          </Link>
          {/* <Link to="/">Projects</Link>
          <Link to="/">Resume</Link>
          <Link to="/">Contact</Link>
          <Link to="/">About</Link> */}
          <a href="#projects">Projects</a>
          <a href="#projects">Resume</a>
          <a href="#projects">Contact</a>
          <a href="#projects">About</a>
        </div>
      </div>
    )
  }
}

export default Header
