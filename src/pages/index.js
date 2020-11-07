import React from 'react'
import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Cell from '../components/Cell'
import staticdata from '../../staticdata.json'
import styled from 'styled-components'
import About from '../components/about'

// import Header from '../components/header'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #94a4ba;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Hola I'm <br></br> Vishnu ES
        </h1>
        <div className="wrapper">
          <h3>
            <span></span>{' '}
          </h3>
        </div>

        {/* <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p> */}

        {/* <Link to="/page-2/">Go to page 2</Link> */}

        <Wave />
      </div>
    </div>
    <div className="about_me">
      {/* <h3>About Me</h3> */}
      <div className="about_div">
        <About
          // image={require('../images/wallpaper2.jpg')}
          logo={require('../images/avatar.png')}
          title="about me"
          text="Im Vishnu ES from Karnataka. I am an undergraduate student at VCET Puttur.
I develop Web applications and Mobile applications. I have great intrest in Mobiles and Electronic gadgets I am a techgeek.
I mostly develop mobile apps in flutter and develop web apps using reactjs with the help of other technologies. I love to learn new things."
        />
        <div className="SocialIcon">
          <a href="https://www.facebook.com/esvishnu">
            <FaFacebook size="2em" color=" #333456" />
          </a>
          <a href="   https://github.com/iamvishnues">
            <FaGithub size="2em" color=" #333456" />
          </a>
          <a href="mailto:esviputtur@gmail.com">
            <SiGmail size="2em" color=" #333456" />
          </a>
          <a href="  https://www.instagram.com/vishnu.es/">
            <FaInstagram size="2em" color=" #333456" />
          </a>
          <a href="https://www.linkedin.com/in/vishnues/">
            <FaLinkedin size="2em" color=" #333456" />
          </a>

          <a href="https://twitter.com/iamvishnues">
            <FaTwitter size="2em" color=" #333456" />
          </a>
          <a href="https://www.youtube.com/vishnues">
            <FaYoutube size="2em" color=" #333456" />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1-D-PeZY-2x4PYaUq_T0Dg0QoTP-qeuFM/view?usp=sharing"
          target="_blank"
        >
          <button>Resume</button>
        </a>
      </div>
    </div>
    <Section
      image={require('../images/darkgrad.jpg')}
      // logo={require('../images/avatar.png')}
      // title="Vishnu ES"
      // text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
    />

    <div className="Cards" id="projects">
      <h2>Projects</h2>
      <div className="CardGroup">
        <a href="https://play.google.com/store/apps/details?id=com.esvisoftec.livenews&hl=en">
          <Card
            title="Live News"
            text="Android App"
            // imagelogo={require('../images/logo.svg')}
            image={require('../images/wallpaper.jpg')}
          />
        </a>

        <a href="https://github.com/iamvishnues/Smart-library">
          <Card
            title="Smart Library"
            text="Desktop Application"
            // imagelogo={require('../images/logo.svg')}
            image={require('../images/wallpaper.jpg')}
          />
        </a>
        <a href="https://github.com/iamvishnues/Flutter-WebView">
          <Card
            title="Flutter Webview"
            text="Android App"
            // imagelogo={require('../images/logo.svg')}
            image={require('../images/wallpaper.jpg')}
          />
        </a>

        <a href="https://github.com/iamvishnues/Google-Search-Engine">
          <Card
            title="Google Clone"
            text="React JS App"
            // imagelogo={require('../images/logo.svg')}
            image={require('../images/wallpaper.jpg')}
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.myapp.newspaper&hl=en">
          <Card
            title="News Paper"
            text="Android App"
            // imagelogo={require('../images/logo.svg')}
            image={require('../images/wallpaper.jpg')}
          />
        </a>
        <a href="https://github.com/iamvishnues/Online-Courses-UI">
          <Card
            title="Online Courses UI"
            text="Android App"
            // imagelogo={require('../images/logo.svg')}
            image={require('../images/wallpaper.jpg')}
          />
        </a>
      </div>
      <div className="Linktonext">
        <Link to="/projects/">More Projects </Link>
      </div>
    </div>
    <Section
      image={require('../images/darkgrad.jpg')}
      // logo={require('../images/avatar.png')}
      // title="Vishnu ES"
      // text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
    />
    <SectionCaption>Skills and Tools</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map((cell) => (
        <Cell title={cell.title} image={cell.image}></Cell>
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
