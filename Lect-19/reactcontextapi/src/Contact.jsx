import React, { useContext } from 'react';
import ThemeContext from './Context/ThemeContext';
import AvailabilityContext from './Context/availability-context';

const Contact = () => {
    const{phone} = useContext(ThemeContext)
    const {availability} = useContext(AvailabilityContext)
  return (
    <>
    <h2>contact:{phone}</h2>
    {availability?<p>available</p>:<p>not available</p>}
    </>
    
  )
}

export default Contact
