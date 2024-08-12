import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Web Developer.',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'Android Developer.',
      1000,
      'Full Stack MERN Developer.',
      1000,
  
    ]}
    wrapper="span"
    speed={10}
    // style={{ fontSize: '2em', display: 'inline-block' }}
    repeat={Infinity}
  />
  )
}

export default TextAnimation