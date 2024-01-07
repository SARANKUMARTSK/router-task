import React from 'react'

function Datascience({dataScience,setdataScience}) {
  return <>
  <div className='flex'>
    <div className='classCards'>
        <img className='image'
        src={dataScience.image}
        alt="full stack image" />
        <h5 className='classHeading'>{dataScience.title}</h5>
        <p className='classPara'>{dataScience.para}</p>
    </div>
  </div>
  </>
}

export default Datascience