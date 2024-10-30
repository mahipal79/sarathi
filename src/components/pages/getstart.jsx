import React from 'react'
import Paper from "./Paper"
import Button from "../Button"
import Section from '../Section'
const getstart = () => {
  return (
    <div>
      <Section>
      <Paper/>
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
      <Button to="/Notes" white>
           Download Notes
          </Button>
          </div>
          </Section>
    </div>
  )
}

export default getstart