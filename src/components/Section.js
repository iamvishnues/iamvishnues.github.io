import React from 'react'
import Wave from './Wave'
import styled from 'styled-components'

const SectionGroup = styled.div`
  background: url(${(props) => props.image});
  ${'' /* height: 820px; */}
  height:420px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  @media (max-width: 640px) {
    height: 420px;
  }
`
// const SectionLogo = styled.img`
//   align-self: end;
//   width: 158px;

//   margin: 0 auto;
//   margin-top: 150px;
// `
// const SectionTitleGroup = styled.div`
//   display: grid;
//   margin: 0 40px;
//   grid-gap: 20px;
//   grid-template-rows: auto 100%;
//   grid-template-columns: 300px auto;
//   @media (max-width: 720px) {
//     grid-template-columns: 1fr;
//   }
// `
// const SectionTitle = styled.h3`
//   color: white;
//   margin: 0;
//   font-size: 60px;
//   line-height: 1.2;
//   @media (max-width: 720px) {
//     font-size: 40px;
//   }
// `
// const SectionText = styled.p`
//   color: white;
// `

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -8px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -8px;
  transform: rotate(180deg);
`

const Section = (props) => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    {/* <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup> */}
  </SectionGroup>
)
export default Section
