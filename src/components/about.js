import React from 'react'
import Wave from './Wave'
import styled from 'styled-components'

const SectionGroup = styled.div`
  height: 520px;
  margin-top: -150px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  @media (max-width: 640px) {
    height: 820px;
    grid-template-rows: 400px auto;
  }
`
const SectionLogo = styled.img`
  align-self: end;
  width: 158px;
  margin: 0 auto;
  margin-top: -20px;
`
const SectionTitleGroup = styled.div`
  display: grid;
  margin: 0 40px;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto 100%;
  ${'' /* grid-template-columns: 300px auto; */}
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`
const SectionTitle = styled.h3`
  color: black;
  margin: 0;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 28px;
  line-height: 1.2;
  @media (max-width: 720px) {
    font-size: 22px;
  }
`
const SectionText = styled.p`
  color: black;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: -20px;
  @media (max-width: 720px) {
    margin-top: -50px;
    font-size: 15px;
  }
  @media (min-width: 1024px) {
    margin-top: -70px;
  }
  @media (max-width: 640px) {
    margin-top: -180px;
  }
  @media (max-width: 467px) {
    margin-top: -120px;
  }
  @media (max-width: 377px) {
    margin-top: -50px;
  }
  @media (max-width: 319px) {
    margin-top: -10px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (max-width: 228px) {
    margin-top: -1px;
    margin-left: 10px;
    margin-right: 10px;
  }
`

// const WaveBottom = styled.div`
//   position: absolute;
//   width: 100%;
//   bottom: -6px;
// `

// const WaveTop = styled.div`
//   position: absolute;
//   width: 100%;
//   top: -6px;
//   transform: rotate(180deg);
// `

const About = (props) => (
  <SectionGroup>
    <SectionLogo src={props.logo} />
    {/* <SectionTitleGroup> */}
    <SectionTitle>{props.title}</SectionTitle>
    <SectionText>{props.text}</SectionText>
    {/* </SectionTitleGroup> */}
  </SectionGroup>
)
export default About
