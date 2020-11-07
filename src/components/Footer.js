import React from 'react'
import styled from 'styled-components'
import './Footer.css'

const FooterGroup = styled.div`
  background: #f1f3f5;
  margin: 0px;
  align-items: center;
  text-align: center;
`

const Footer = () => (
  <FooterGroup>
    <p className="Visitor">Visitors Count</p>
    <img
      src="https://counter11.stat.ovh/private/freecounterstat.php?c=hhraqx9s4qxxc9wugckhw7gf59wf9195"
      border="0"
      title="Page Hits"
      alt="Visitors Counter"
    ></img>
    {/* <h3>Contact</h3> */}
    <p className="Name">vishnues 2020</p>
  </FooterGroup>
)
export default Footer
