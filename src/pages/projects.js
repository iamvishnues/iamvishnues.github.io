import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import './projects.css'

const SecondPage = () => (
  <div>
    <div className="Headers"></div>
    <h1>Projects</h1>

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
      <a href="https://play.google.com/store/apps/details?id=com.esvisoftec.livenews&hl=en">
        <Card
          title="Live News"
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
      <a href="https://github.com/iamvishnues/Online-Courses-UI">
        <Card
          title="Online Courses UI"
          text="Android App"
          // imagelogo={require('../images/logo.svg')}
          image={require('../images/wallpaper.jpg')}
        />
      </a>
    </div>
  </div>
)

export default SecondPage
