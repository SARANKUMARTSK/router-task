import React from 'react'
import FullStack from './FullStack'
import { useState } from 'react'
import Datascience from './Datascience'
import Career from './Career'
import CyberSecurity from './CyberSecurity'


function All({fullstack , setFullstack , career , setCareer , dataScience , setdataScience , cyberSecurity,setCyberSecurity}) {
  return <>
  {/* {
    fullstack.map((e, i) => {return <FullStack fullstack={e} key={i} />})
  } */}
  {/* {
    dataScience.map((e, i) => {return <Datascience dataScience={e} key={i} />})
  }
  {
    cyberSecurity.map((e, i) => {return <CyberSecurity cyberSecurity={e} key={i} />})
  } */}
  {/* {
    career.map((e,i) => {return <Career career={e} key={i} />})
  } */}

  
  <h1>This Is All Page</h1>
  </>
  
}

export default All