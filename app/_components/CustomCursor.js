import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

export default function CustomCursor() {
  return (
    <AnimatedCursor 
      className='app__cursor'
      innerSize={0}
      outerSize={5}
      color='#8d8d8d'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}
