import React from 'react'
import{    AboutBanner,
  AboutCenterCta,
  AboutHero,
  OurTeam} from '../components/about/index'

function About() {
  return (
    <div>
      <AboutHero/>
      <AboutBanner/>
      <OurTeam/>
      <AboutCenterCta/>

    </div>
  )
}

export default About