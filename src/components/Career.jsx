import React from 'react'

function Career({career,setCareer}) {
  return <>
  <div className='flex'>
    <div className='classCards'>
        <img className='image'
        src={career.image}
        alt="full stack image" />
        <h5 className='classHeading'>{career.title}</h5>
        <p className='classPara'>{career.para}</p>
    </div>
  </div>
  </>
}

export default Career