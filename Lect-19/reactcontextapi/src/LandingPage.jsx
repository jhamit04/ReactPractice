import React, { useContext } from 'react'
import ThemeContext from './Context/ThemeContext'
import AvailabilityContext from './Context/availability-context'

const LandingPage = () => {
    const {name} = useContext(ThemeContext) 
    const {toggler} = useContext (AvailabilityContext)
  return (
    <>
    <h1>Landing Page</h1>
    <h3>{name}</h3>
    <button onClick={toggler}>toggler</button>
    </>
  )
}

export default LandingPage
