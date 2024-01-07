import React from 'react'

function CyberSecurity({cyberSecurity,setCyberSecurity}) {
  return <>
  <div className='flex'>
    <div className='classCards'>
        <img className='image'
        src={cyberSecurity.image}
        alt="full stack image" />
        <h5 className='classHeading'>{cyberSecurity.title}</h5>
        <p className='classPara'>{cyberSecurity.para}</p>
    </div>
  </div>
  </>
}

export default CyberSecurity