'use client'

import grained from '../../_utilities/grained'
import React, { useEffect } from 'react'

export default function Grained({ele, opt, children}) {

  let defaultOptions = {
    animate: true,
    patternWidth: 100,
    patternHeight: 100,
    grainOpacity: 0.07,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1
  }

  // Graining stuff...
  useEffect(() => {
    const appContainer = document.getElementById(ele);
    if (appContainer) {
      grained(`#${ele}`, opt ? opt : defaultOptions)
    } 
  }, []);

  return (
    <div className={ele} id={ele}>
      {children}
    </div>
  )
}

