import React from 'react'

function FullStack({fullstack , setFullstack}) {
  return <>
  <div className='flex'>
    <div className='classCards'>
        <img className='image'
        src={fullstack.image}
        alt="full stack image" />
        <h5 className='classHeading'>{fullstack.title}</h5>
        <p className='classPara'>{fullstack.para}</p>
    </div>
  </div>
  </>
}

export default FullStack