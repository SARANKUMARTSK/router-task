import React from 'react'
import Navbar from './components/Navbar'
import FullStack from './components/FullStack'
import { useState } from 'react'
import Datascience from './components/Datascience'
import CyberSecurity from './components/CyberSecurity'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Career from './components/Career'
import { Link } from 'react-router-dom'
import All from './components/All'

function App() {
  let [fullstack, setFullstack] = useState([
    {
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/X_Reasons_to_learn_Javascript.jpg",
      title: "JavaScript",
      para: "JavaScript is the world's most popular programming language,JavaScript is the programming language of the Web,JavaScript is easy to learn"
    },
    {
      image: "https://www.investopedia.com/thmb/33J47lYaGMBV4nx8vdJNtHBv3cY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/html.asp-final-86da30eff12f46f3a1394efb0b137103.png",
      title: "HTML",
      para: "HTML is the standard markup language for Web pages,With HTML you can create your own Website,HTML is easy to learn "
    },
    {
      image: "https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8-1200-80.jpg",
      title: "CSS",
      para: "CSS is the language we use to style an HTML document,CSS describes how HTML elements should be displayed"
    },
    {
      image: "https://www.peerbits.com/static/da2d745ffd48ca1e9b71b3086612dc2c/c56ad/react-vs-angular-social-image.png",
      title: "React.js",
      para: "React is a JavaScript library for building user interfaces,React is used to build single-page applications,React allows us to create reusable UI components"
    },
    {
      image: "https://miro.medium.com/v2/resize:fit:1200/1*XftuNT2rOt_m15xTnkr3uA.png",
      title: "Backend JS Frame Works",
      para: "js is used for backend the most often among the frameworks. It has also been the fastest-growing framework for at least six recent years."
    },
  ])

  let [dataScience, setdataScience] = useState([
    {
      image: "https://www.livewireindia.com/blog/wp-content/uploads/2019/06/Python-Training-in-Whitefield-Bangalore.jpg",
      title: "Python - Basic",
      para: "We will go through the basics of Python with all essential beginner-friendly concepts of Python programming like datatypes, loops, data structures, and functions, followed by assessments and assignments."

    },
    {
      image: "https://www.emexotechnologies.com/wp-content/uploads/2021/01/python-training-emexo.png",
      title: "Python - Advanced",
      para: "Since we have the essential basics of Python we will see some advanced concepts like Comprehension, File handling, Regular Expressions, Object-oriented Programming, Pickling, and many more essential concepts."

    },
    {
      image: "https://www.freecodecamp.org/news/content/images/2021/09/dspython.png",
      title: "Algorithmic Thinking with Python",
      para: "We will explore the need for Algorithmic Thinking and the necessity of efficient coding; we will drive through Data Structures and Algorithms along with Memory Management Techniques."

    },

  ])

  let [cyberSecurity, setCyberSecurity] = useState([
    {
      image: "https://iirfranking.com/courses/wp-content/uploads/2022/07/Cyber-Security.jpeg",
      title: "Google Cyber Security",
      para: "Whether you're just starting out or already have some experience, we offer various Cybersecurity courses designed to fit your needs."

    },
    {
      image: "https://www.upshottechnologies.in/images/course/cyber-security-training.jpg",
      title: "Foundations Cyber Security",
      para: "Curated from top educational institutions and industry leaders, our selection of Cybersecurity courses aims to provide quality training for everyone—from individual learners seeking personal growth to corporate teams looking to upskill."
    },
    {
      image: "https://www.reliablesoft.net/wp-content/uploads/2022/10/cyber-security-courses.webp",
      title: "Cyber Security For Everyone",
      para: "For those pursuing professional advancement, skill acquisition, or even a new career path, these Cybersecurity courses can be a valuable resource. Take the next step in your professional journey and enroll in a Cybersecurity course today!"
    },

  ])

  let [career, setCareer] = useState([
    {
      image: "https://www.calltutors.com/blog/wp-content/uploads/2021/11/web-developer-career-path.webp",
      title: "Web Developer Career Path",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos officiis fugit id animi similique obcaecati autem optio vitae neque laudantium sapiente dolorem nam, accusantium modi maxime molestias nihil placeat! "

    },
    {
      image: "https://i.ytimg.com/vi/gPREZgehCrQ/maxresdefault.jpg",
      title: "Web Development Career",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos officiis fugit id animi similique obcaecati autem optio vitae neque laudantium sapiente dolorem nam, accusantium modi maxime molestias nihil placeat!"
    }

  ])

  return <>
    
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path='/all' element={<All/>}/>
        <Route path='/fullstack' element={
          fullstack.map((e, i) => {return <FullStack fullstack={e} key={i} />})}/>
        <Route path='datascience' element={
        dataScience.map((e, i) => {return <Datascience dataScience={e} key={i} />})}/>
        <Route path='cybersecurity' element={
        cyberSecurity.map((e, i) => {return <CyberSecurity cyberSecurity={e} key={i} />})}/>
        <Route path='/career' element={
        career.map((e, i) => {return <Career career={e} key={i} />})}/>
        <Route path='*' element={<All/>}/>
      </Routes>
      
    </BrowserRouter>
  </>
}

export default App