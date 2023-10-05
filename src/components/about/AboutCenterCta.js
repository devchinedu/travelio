import { Button, Typography } from '@material-tailwind/react'
import React from 'react'

function AboutCenterCta() {
  return (
    <div className="bg-gradient-to-b from-[#151e28]  to-[#05203C] flex flex-col items-center justify-center px-20 py-14 mt-10 lg:mt-20 ">
   
        <Typography
          variant="h2"
          color="white"
          className="text-3xl lg:text-6xl font-bold text-center pb-10 lg:w-1/2 w-full"
        >
        What are you waiting for?
          <span className="font-thin text-white"> Get Started Today!</span>
        </Typography>
        <Button
          variant="outlined"
          color='white'
          className="w-auto text-md font-light rounded-none "
        >
          Get Started
        </Button>
     
    </div>
  )
}

export default AboutCenterCta